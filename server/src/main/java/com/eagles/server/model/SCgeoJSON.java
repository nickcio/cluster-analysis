
package com.eagles.server.model;
import com.eagles.server.dao.ArizonageoJSONRepository;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "SCgeoJSON")
public class SCgeoJSON {
    @Id
    private String _id;
    private FeatureCollection geoJson;

    public SCgeoJSON(String _id, FeatureCollection geoJson){
        this._id = _id;
        this.geoJson = geoJson;
    }

    public String get_id() {
        return _id;
    }

    public FeatureCollection getGeoJson() {
        return geoJson;
    }

    public static class FeatureCollection {
        private String type;
        private List<Feature> features;
        private CRS crs;

        // Constructors, getters, and setters
        public FeatureCollection(String type, List<Feature>features, CRS crs)
        {
            this.type = type;
            this.features = features;
            this.crs= crs;
        }

        public String getType() {
            return type;
        }

        public List<Feature> getFeatures() {
            return features;
        }

        public CRS getCrs() {
            return crs;
        }

        // CRS class
        public static class CRS {
            private String type;
            private Map<String, Object> properties;

            // Constructors, getters, and setters
            public CRS(String type, Map<String, Object>properties)
            {
                this.type = type;
                this.properties = properties;
            }

            public String getType() {
                return type;
            }

            public Map<String, Object> getProperties() {
                return properties;
            }
        }

        // Feature class
        public static class Feature {
            private String type;
            private Geometry geometry;
            private Map<String, Object> properties;

            // Constructors, getters, and setters
            public Feature(String type, Geometry geometry, Map<String, Object>properties)
            {
                this.type = type;
                this.geometry = geometry;
                this.properties = properties;
            }

            public String getType() {
                return type;
            }

            public Geometry getGeometry() {
                return geometry;
            }

            public Map<String, Object> getProperties() {
                return properties;
            }
        }

        // Geometry class
        public static class Geometry {
            private String type;
            private  List<?> coordinates; // This can vary based on the actual geometry type (Point, LineString, etc.)

            // Constructors, getters, and setters
            public Geometry(String type,  List<?>coordinates)
            {
                this.type = type;
                this.coordinates = coordinates;
            }

            public String getType() {
                return type;
            }

            public List<?> getCoordinates() {
                return coordinates;
            }
        }
    }
}














//package com.eagles.server.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.Field;
//
//import java.util.List;
//import java.util.Map;
//@Document(collection = "ArizonageoJSON")
//public class ArizonageoJSON {
//    @Id
//    private String _id;
//
//    private Map<String,Object> geoJson;
//
//    public ArizonageoJSON(String _id, Map<String, Object>geoJson){
//        this._id = _id;
//        this.geoJson = geoJson;
//    }
//
//    public String get_id() {
//        return _id;
//    }
//
//    public Map<String, Object> getGeoJson() {
//        return geoJson;
//    }
//}
//class geoJsonField{
//    private String type;
//    private List<features> features;
//
//    public static class features{
//        private String id;
//        private String type;
//        private Map<String, Object> properties;
//        private geometryObject geometry;
//
//        public static class geometryObject{
//            private String type;
//            private Map<String, Map<String, Double>> coordinates;
//        }
//    }
//
//
//    private crs crs;
//
//    public static class crs{
//        private String type;
//        private Map<String, String> properties;
//
//        public crs(String type, Map<String, String> properties)
//        {
//            this.type = type;
//            this.properties = properties;
//        }
//
//        public String getType() {
//            return type;
//        }
//
//        public Map<String, String> getProperties() {
//            return properties;
//        }
//    }
//}
//
