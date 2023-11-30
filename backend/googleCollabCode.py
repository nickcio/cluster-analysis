import districtPlan
import json
import random


# districtplanthing = districtPlan.build_district_plan("Arizona", partitions[0], 1)
# print("Plan ID: ", districtplanthing.plan_id)
# print("geoJSON ID: ", districtplanthing.geojson_id)
# print("District Winners: ", districtplanthing.district_winners)
# print("Dem Rep Splits: ", districtplanthing.rep_dem_splits)
# print("Opportunity Districts ", districtplanthing.opportunity_districts)
# print("Population Data ", districtplanthing.population_data)
# print("Area Data ", districtplanthing.area_data)

# districtplanthingdict = districtplanthing.to_dict()

cluster = {
    "ensemble": {f"cluster {i}": [] for i in range(0, 4)}
    
}

districtPlans = {
    "district plans":
    []
}

# percentWhite = {
#     "percent white":[],
#     "percent aa": [],
#     "percent hispanic":[]
# }

counter = 0
for i in range(50):
  districtplanthing = districtPlan.build_district_plan("Arizona", partitions[i], i)
  # print("Plan ID: ", districtplanthing.plan_id)
  # print("geoJSON ID: ", districtplanthing.geojson_id)
  # print("District Winners: ", districtplanthing.district_winners)
  # print("Dem Rep Splits: ", districtplanthing.rep_dem_splits)
  # print("Opportunity Districts ", districtplanthing.opportunity_districts)
  # print("Population Data ", districtplanthing.population_data)
  # print("Area Data ", districtplanthing.area_data)

  districtplanthingdict = districtplanthing.to_dict()
  districtPlans["district plans"].append(districtplanthingdict)
  if i % 10 == 0 and i != 0:
    cluster["ensemble"][f"cluster {counter}"].append(districtPlans)

    percentWhite = {
        "percent white":[],
    }
    percentAA = {
        "percent aa":[],
    }
    percenthispanic= {
        "percent hispanic":[],
    }

    percentDemo = {
        "percent demo":[],
    }

    percentRepu = {
        "percent republic":[],
    }

    clusterSize = {
        "cluster size":[],
    }
    # Append percentage data to percentWhite
    random_number = round(random.uniform(10, 50), 3)
    percentWhite["percent white"].append(random_number)
    roof = 50 - random_number
    random_number = round(random.uniform(0, roof), 3)
    percentAA["percent aa"].append(random_number)
    roof = 50 - random_number
    random_number = round(random.uniform(0, roof), 3)
    percenthispanic["percent hispanic"].append(random_number)

    random_number = round(random.uniform(0, 60), 3)
    percentDemo["percent demo"].append(random_number)
    percentRepu["percent republic"].append(100-random_number)
    
    random_number = round(random.uniform(0, 500))
    clusterSize["cluster size"].append(random_number)

    cluster["ensemble"][f"cluster {counter}"].append(percentWhite)
    cluster["ensemble"][f"cluster {counter}"].append(percentAA)
    cluster["ensemble"][f"cluster {counter}"].append(percenthispanic)
    cluster["ensemble"][f"cluster {counter}"].append(percentDemo)
    cluster["ensemble"][f"cluster {counter}"].append(percentRepu)
    cluster["ensemble"][f"cluster {counter}"].append(clusterSize)
    counter = counter + 1 
    districtPlans = {
    "district plans":
    []
    }




with open("district_plan10.json", 'w') as file:
    json.dump(cluster, file, indent=4)
print(f"Object has been stored in {file_path}")


