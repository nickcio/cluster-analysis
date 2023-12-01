package com.eagles.server.service;

import com.eagles.server.dao.ClusterRepository;
import com.eagles.server.model.Cluster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClusterService {
    private ClusterRepository clusterRepository;
    @Autowired
    public ClusterService(ClusterRepository clusterRepository){
        this.clusterRepository = clusterRepository;
    }
//    public Cluster getClusterById(String cluster_Id) {
//        return clusterRepository.findByCluster_Id(cluster_Id);
//    }

    public List<Cluster> getAllClusters() {
        return clusterRepository.findAll();
    }

}
