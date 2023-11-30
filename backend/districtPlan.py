from gerrychain import (GeographicPartition, Partition, Graph, MarkovChain,
                        proposals, updaters, constraints, accept, Election)

import random


class DistrictPlan:
    def __init__(self, plan_id, geojson_id, dem_percentages, rep_percentages, district_winners, rep_dem_splits, opportunity_districts, population_data, area_data):
        self.plan_id = plan_id  # Unique identifier for plan: Integer
        self.geojson_id = geojson_id  # Reference to geoJSON in db (if applicable): Integer
        self.dem_percentages = dem_percentages
        self.rep_percentages = rep_percentages
        self.district_winners = district_winners  # Object detailing the winners for each district: Dictionary
        self.rep_dem_splits = rep_dem_splits  # Object detailing the total dem and rep winners
        self.opportunity_districts = opportunity_districts  # [5, 12] -> District 5 and 12 are opportunity dists: Array
        self.population_data = population_data  # Object, nested objects telling population for each demographic
        self.area_data = area_data  # Object detailing the area of every district

    def to_dict(self):
        return {
            "plan_id": self.plan_id,
            "geojson_id": self.geojson_id,
            "dem_percentages": self.dem_percentages,
            "rep_percentages": self.rep_percentages,
            "district_winners": self.district_winners,
            "rep_dem_splits": self.rep_dem_splits,
            "opportunity_districts": self.opportunity_districts,
            "population_data": self.population_data,
            "area_data": self.area_data
        }


def build_district_plan(state, partition, planID):
    # PART 1: Get all the population data, use this to fill out the DistrictPlan object and the find_opportunity_districts() method

    pop_total = dict(sorted(partition["population"].items()))
    pop_white = dict(sorted(partition["pop_white"].items()))
    pop_hisp = dict(sorted(partition["pop_hisp"].items()))
    pop_black = dict(sorted(partition["pop_black"].items()))
    pop_asian = dict(sorted(partition["pop_asian"].items()))
    pop_other = {key: pop_total[key] - sum(pop.get(key, 0) for pop in [pop_white, pop_hisp, pop_black, pop_asian]) for
                 key in pop_total}

    # PART 2: Build population dictionary

    population_data = {"pop_total": pop_total, "pop_white": pop_white, "pop_hisp": pop_hisp, "pop_black": pop_black,
                       "pop_asian": pop_asian, "pop_other": pop_other}

    # PART 3: Find all the opportunity districts

    opportunity_districts = find_opportunity_districts(pop_total, pop_white, pop_hisp, pop_black, pop_asian, pop_other)

    # PART 4: Calculate the winner of each district, in Arizona since its the state assembly plan its 2 per district so watch out for that

    if state == "Arizona":
        district_winners = predict_arizona_winner(partition["SEN20"].percents_for_party)
    else:
        district_winners = predict_carolina_texas_winner(partition["SEN20"].percents_for_party)

    # PART 5: Calculte the democratic and republican split of the state, this is once again different depending on the type of plan

    if state == "Arizona":
        dem_rep_split = dem_rep_split_az(district_winners)
    else:
        dem_rep_split = dem_rep_split_tx_sc(district_winners)

    # PART 6: Get the geometric area of each district in the plan

    district_areas = {key: round(value) for key, value in dict(sorted(partition.area.items())).items()}

    # PART 7: Get the democratic and republican percentages in a dictionary

    democratic_percentages = {key: round(value, 2) for key, value in partition["SEN20"].percents_for_party['Democratic'].items()}
    republican_percentages = {key: round(value, 2) for key, value in partition["SEN20"].percents_for_party['Republican'].items()}

    return DistrictPlan(planID, 0, democratic_percentages, republican_percentages, district_winners, dem_rep_split, opportunity_districts, population_data, district_areas)


def predict_arizona_winner(voting_percents):
    """
    predicts the two winners of a district, this method` is unique to arizona
    because in a state assembly there are 30 districts and 2 seats per. So 60
    seats in total for the entire state.

    vote_data: total_election_results.percents_for_party

    returns a dictionary with the results of the election for each district
    """
    winners = {}

    for district in voting_percents['Democratic'].keys():
        dem_percentage = voting_percents['Democratic'][district]
        rep_percentage = voting_percents['Republican'][district]

        # PART 1: Check if the district is competitive (within the threshold), if 70/30 then assume it's a win
        if abs(dem_percentage - rep_percentage) > 0.20:
            # Non-competitive district, both seats to the majority party
            majority_party = 'Democratic' if dem_percentage > rep_percentage else 'Republican'
            winners[district] = [majority_party, majority_party]
        else:
            # PART 2: Competitive district, use random distribution for candidates
            dem_candidate_1 = random.uniform(0, dem_percentage)
            dem_candidate_2 = dem_percentage - dem_candidate_1
            rep_candidate_1 = random.uniform(0, rep_percentage)
            rep_candidate_2 = rep_percentage - rep_candidate_1

            candidates = [('Democratic', dem_candidate_1), ('Democratic', dem_candidate_2),
                          ('Republican', rep_candidate_1), ('Republican', rep_candidate_2)]
            candidates.sort(key=lambda x: x[1], reverse=True)

            winners[district] = [candidates[0][0], candidates[1][0]]

    return winners


def predict_carolina_texas_winner(voting_percents):
    """
    predicts who wins based on the higher voting percentage between Democratic and
    Republican parties, only one per district this time

    vote_data: total_election_results.percents_for_party

    returns a dictionary with the results of the election for each district
    """
    winners = {}

    for district in voting_percents['Democratic'].keys():
        dem_percentage = voting_percents['Democratic'][district]
        rep_percentage = voting_percents['Republican'][district]

        # Determine the winner based on higher percentage
        winner = 'Democratic' if dem_percentage > rep_percentage else 'Republican'
        winners[district] = winner

    return winners


def dem_rep_split_az(arizona_winners):
    """
  gives the dem/rep split in a dictionary

  arizona_winners: the output of predict_arizona_winner goes in here

  returns a dictionary telling the number of votes for each party, {'Democratic': 12, 'Republican': 8}
  """
    # Initialize counters for both parties
    dem_count = 0
    rep_count = 0

    # Iterate through the dictionary and count occurrences of each party
    for key, values in arizona_winners.items():
        for value in values:
            if value == 'Democratic':
                dem_count += 1
            elif value == 'Republican':
                rep_count += 1

    return {'Democratic': dem_count, 'Republican': rep_count}


def dem_rep_split_tx_sc(tx_sc_winners):
    """
  gives the dem/rep split in a dictionary

  tx_sc_winners: the output of predict_carolina_texas_winner goes in here

  returns a dictionary telling the number of votes for each party, {'Democratic': 12, 'Republican': 8}
  """
    # Initialize counters for both parties
    dem_count = 0
    rep_count = 0

    # Iterate through the dictionary and count occurrences of each party
    for value in tx_sc_winners.values():
        if value == 'Democratic':
            dem_count += 1
        elif value == 'Republican':
            rep_count += 1

    return {'Democratic': dem_count, 'Republican': rep_count}


def find_opportunity_districts(pop_total, pop_white, pop_hisp, pop_black, pop_asian, pop_other):  # Identify the Majority-Minority Districts
    """
    for the sake of this project, we define an opportunity district as a district
    where the sum of the minority populations exceed the total white population,
    this is also known as a majority-minority district

    total_pop, white_pop, hispanic_pop, asian_pop, black_pop, other_pop:
    all dictionaries with the populations of each district, {0: 100, 1: 150, ...}

    returns an array where each number corresponds to a district in the district
    plan, all of these districts are opportunity districts
    """
    opportunity_districts = []
    for district in pop_total.keys():
        # Calculate the total minority population
        minority_population = (pop_hisp[district] + pop_black[district] + pop_asian[district] + pop_other[district])

        # Check if the minority population is larger than the white population
        if minority_population > pop_white[district]:
            opportunity_districts.append(district)

    return opportunity_districts
