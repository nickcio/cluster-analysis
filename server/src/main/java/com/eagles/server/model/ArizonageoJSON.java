package com.eagles.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.Map;
@Document(collection = "ArizonageoJSON")
public class ArizonageoJSON {
    @Id
    private String _id;

    private Map<String,Object> geoJson;

    public ArizonageoJSON(String _id, Map<String, Object>geoJson){
        this._id = _id;
        this.geoJson = geoJson;
    }

    public String get_id() {
        return _id;
    }

    public Map<String, Object> getGeoJson() {
        return geoJson;
    }
}
class geoJsonField{
    private String type;
    private List<features> features;

    public static class features{
        private String id;
        private String type;
        private Map<String, Object> properties;
        private geometryObject geometry;

        public static class geometryObject{
            private String type;
            private Map<String, Map<String, Double>> coordinates;
        }
    }


    private crs crs;

    public static class crs{
        private String type;
        private Map<String, String> properties;

        public crs(String type, Map<String, String> properties)
        {
            this.type = type;
            this.properties = properties;
        }

        public String getType() {
            return type;
        }

        public Map<String, String> getProperties() {
            return properties;
        }
    }
}

