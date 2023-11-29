from google.colab import auth
auth.authenticate_user()

import gspread
from google.auth import default
creds, _ = default()

gc = gspread.authorize(creds)

worksheet = gc.open('Your spreadsheet name').sheet1

# get_all_values gives a list of rows.
rows = worksheet.get_all_values()
print(rows)

# Convert to a DataFrame and render.
import pandas as pd
pd.DataFrame.from_records(rows)

import matplotlib.pyplot as plt
from gerrychain import (GeographicPartition, Partition, Graph, MarkovChain,
                        proposals, updaters, constraints, accept, Election)
from gerrychain.proposals import recom
from gerrychain.tree import recursive_tree_part
from functools import partial
import pandas
import geopandas as gpd

# PART 1: The preprocessed file we have isn't in a graph format that gerrychain uses, so import geopandas and create a graph from the json as seen below
gdf = gpd.read_file("/azprecinctstest.json")
graph = Graph.from_geodataframe(gdf)
gdf.head()

# PART 2: Create the election array / the election objects
elections = [
    Election("SEN20", {"Democratic": "adv_20", "Republican": "arv_20"})
]

# PART 3: Configure the updaters and thingies
my_updaters = {
        "population": updaters.Tally("vap", alias="population"),
        "pop_white": updaters.Tally("vap_white", alias="pop_white"),
        "pop_hisp": updaters.Tally("vap_hisp", alias="pop_hisp"),
        "pop_black": updaters.Tally("vap_black", alias="pop_black"),
        "pop_asian": updaters.Tally("vap_asian", alias="pop_asian"),}

election_updaters = {election.name: election for election in elections}
my_updaters.update(election_updaters)

# PART 4: Configure the assignments, this has stuff like the number of districts we want to start with
total_pop = sum([graph.nodes[n]["vap"] for n in graph.nodes])
num_districts = 10 # 30 cuz thats how many senate districts there are

assignment = recursive_tree_part(
    graph,
    range(num_districts), #district names, in this case {0,1,2,3}
    total_pop / num_districts, #ideal population for a district
    "vap",
    0.05 #maximum allowed population deviation, 5% for now
)

# PART 5: Configure the inital partition
initial_partition = GeographicPartition(graph, assignment=assignment, updaters=my_updaters)
initial_partition.plot(gdf)

# PART 6: Set up the ReCom proposal
ideal_population = sum(initial_partition["population"].values()) / len(initial_partition)

proposal = partial(recom,
                   pop_col="vap",
                   pop_target=ideal_population,
                   epsilon=0.02,
                   node_repeats=2
                  )

# PART 7: Set up the constraints
compactness_bound = constraints.UpperBound(
    lambda p: len(p["cut_edges"]),
    2*len(initial_partition["cut_edges"])
)

pop_constraint = constraints.within_percent_of_ideal_population(initial_partition, 1) # 0.02 was too low so we bumped it up to 1

# PART 8: Configure the markov chain
chain = MarkovChain(
    proposal=proposal,
    constraints=[
        pop_constraint,
        compactness_bound
    ],
    accept=accept.always_accept,
    initial_state=initial_partition,
    total_steps=1000
)

# PART 9: Run the chain
partitions = []

for partition in chain.with_progress_bar():
    partitions.append(partition)

final_partition = partitions[-1]
final_partition.plot(gdf)

# PART 8 - VERSION 2
num_simulations = 100
total_steps_per_simulation = 500
unique_plans = []

for simulation in range(num_simulations):
    chain = MarkovChain(
        proposal=proposal,
        constraints=[
            pop_constraint,
            compactness_bound
        ],
        accept=accept.always_accept,
        initial_state=initial_partition,
        total_steps=total_steps_per_simulation
    )

    # Run the chain for the specified number of steps and take the last state
    for partition in chain.with_progress_bar():
        pass  # This will run the chain for 500 steps

    unique_plans.append(partition)  # Save the final state of the chain
    
unique_plans[0].plot(gdf)
unique_plans[5].plot(gdf)
unique_plans[15].plot(gdf)
unique_plans[20].plot(gdf)
unique_plans[35].plot(gdf)
unique_plans[50].plot(gdf)
unique_plans[61].plot(gdf)
unique_plans[82].plot(gdf)

import numpy as np
from optimaltransport import Pair

# Select the first ten items (idk why I generated 100 things)
first_ten_plans = unique_plans[:10]

# Create a n x n matrix
distance_matrix = np.zeros((10, 10))

# Calculate optimal transport distance and fill in the matrix
for i in range(10):
  for j in range(i, 10):
    plan = first_ten_plans[i]
    compared_plan = first_ten_plans[j]

    distance = Pair(plan, compared_plan).distance

    distance_matrix[i, j] = distance
    distance_matrix[j, i] = distance

print(distance_matrix)

import seaborn as sns
import matplotlib.pyplot as plt

# Assume 'distance_matrix' is your array
sns.heatmap(distance_matrix)
plt.show()

from sklearn.manifold import MDS

mds = MDS(n_components=2, random_state=0, dissimilarity='precomputed')
pos = mds.fit(distance_matrix).embedding_
print(pos)

import matplotlib.pyplot as plt

# Assuming 'pos' is your 2D array resulting from MDS
# pos = mds.fit(distance_matrix).embedding_

# Scatter plot
plt.scatter(pos[:, 0], pos[:, 1])

# Optionally, add annotations, titles, or labels
plt.title('MDS Scatter Plot')
plt.xlabel('Component 1')
plt.ylabel('Component 2')

# Show the plot
plt.show()


from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# 'pos' is your 2D array resulting from MDS
# pos = mds.fit(distance_matrix).embedding_

# Elbow method to find the optimal number of clusters
sse = []  # Sum of squared distances
for k in range(1, 11):  # Test k from 1 to 10
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(pos)
    sse.append(kmeans.inertia_)  # Inertia: Sum of distances of samples to their closest cluster center

# Plot SSE for each *k*
plt.figure(figsize=(10, 6))
plt.plot(range(1, 11), sse, marker='o')
plt.title('Elbow Method For Optimal k')
plt.xlabel('Number of clusters')
plt.ylabel('SSE')
plt.show()


# Assuming you have chosen an optimal k after observing the elbow plot
optimal_k = 3  # Replace with the value you find optimal

# Apply k-means clustering
kmeans = KMeans(n_clusters=optimal_k, random_state=42)
clusters = kmeans.fit_predict(pos)

# Map the original objects to their clusters
object_cluster_mapping = dict(zip(first_ten_plans, clusters))
print(object_cluster_mapping)  # This will print the mapping of objects to clusters

# Plotting the clustered data
plt.scatter(pos[:, 0], pos[:, 1], c=clusters, cmap='viridis', marker='o')
centers = kmeans.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], s=300, c='red', marker='x')  # Plot the centroids
plt.title('MDS with K-Means Clustering')
plt.xlabel('Component 1')
plt.ylabel('Component 2')
plt.show()

print(first_ten_plans[0].population)
print(first_ten_plans[0].area)
print(first_ten_plans[0].pop_white)
print(first_ten_plans[0].pop_asian)
print(first_ten_plans[0]["SEN20"])

