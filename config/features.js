const features = {
    // Switches between production (F) and construction (T)
    "developmentMode": true,
    "production": {
        "attributeDataTypes": [ ],
        "crudFilterOptions": {
            "read": [ ],
            "create": [ ],
            "edit": [ ],
            "destroy": [ ]
        },
        "crudStylingOptions": {
            "read": [ ],
            "create": [ ],
            "edit": [ ],
            "destroy": [ ]
        }
    },
    "construction": {
        // Data types for customModel
        "attributeDataTypes": [ "string" ],
        // Ways to specify which models will be affected by a CRUD
        "crudFilterOptions": {
            "read": [ "objectId" ], // by specific id, by model name, all
            "create": [ "single" ], // creates one model object
            "edit": [ "objectId" ],
            "destroy": [ "all" ]
        },
        // Ways a CRUD is visually presented
        "crudStylingOptions": {
            "read": [ "table"],
            "create": [ "form" ],
            "edit": [ "form" ],
            "destroy": [ "button" ]
        }
    }
};

function currentFeatures () {
    if (features.developmentMode) {
        return features.construction;
    } else {
        return features.production;
    }
}

module.exports = currentFeatures();