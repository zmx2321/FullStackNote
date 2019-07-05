report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/qq_map_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20190520-224812/qq_map_0_document_0_phone.png",
        "selector": "document",
        "fileName": "qq_map_0_document_0_phone.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.22",
          "analysisTime": 26
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20190520-224812/failed_diff_qq_map_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/qq_map_0_document_1_ipad.png",
        "test": "../../../backstop_data/bitmaps_test/20190520-224812/qq_map_0_document_1_ipad.png",
        "selector": "document",
        "fileName": "qq_map_0_document_1_ipad.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "ipad",
        "error": "Reference file not found /Users/yuanzhijia/Desktop/yd-qa/backstop_data/bitmaps_reference/qq_map_0_document_1_ipad.png"
      },
      "status": "fail"
    }
  ],
  "id": "qq"
});