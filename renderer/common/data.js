export default {
  testcase: {
    fileversion: 1,
    ShortName: "TestCase-1524116167401",
    Description:
      "To check transition from ENABLED State to OFF State when FCM is not in RTA state (FCM = Failed State)",
    SummaryCategories: "System Test",
    State: "Active",
    RequirementID: "",
    refId: 1976724,
    refMode: "Author",
    priority: "",
    automatedBehavioronError: "Next Step",
    tocomment: "",
    displayOnTree: true,
    displayOnTable: true,
    path: "//DemoProject//TestSuite-1523525761967//TestCase-1524116167401.xml",
    status: "proposed",
    version: "0.0.1.6 (BETA)",
    createdate: "04/13/2018 10:00:35",
    modifiedate: "05/14/2018 20:28:14",
    TestCaseFormid: [
      {
        type: "Pre Conditions",
        id: 0,
        idHead: "#",
        action: "Pre Conditions",
        serviceType: "",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "#",
        refId: "#",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Pre Conditions",
        id: 1,
        idHead: 1,
        action: "Run",
        serviceType: "Test Case",
        description: 1976722,
        desiredValue: "Pre Conditions + TestSequence",
        extensions: "",
        comments: "",
        stepData: 1,
        refId: "STEP_12432579269970",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 2,
        idHead: "#",
        action: "Test Sequence",
        serviceType: "",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "",
        refId: "STEP_12432579745273",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 3,
        idHead: 1,
        action: "Set",
        serviceType: "CAN Signal",
        description: "NonDriven_Wheel_Grnd_Velocity_HE.WhlGrndVlctyRtNnDrvn",
        desiredValue: 60,
        extensions: "",
        comments: "",
        stepData: "",
        refId: "STEP_12432579791779",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 4,
        idHead: 2,
        action: "Set",
        serviceType: "CAN Signal",
        description: "NonDriven_Wheel_Grnd_Velocity_HE.WhlGrndVlctyLftNnDrvn",
        desiredValue: 60,
        extensions: "",
        comments: "",
        stepData: 12,
        refId: "STEP_13916241654360",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 5,
        idHead: 3,
        action: "Run",
        serviceType: "Video",
        description: "LSCMB_60.avi",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "",
        refId: "STEP_12432579826339",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 6,
        idHead: 4,
        action: "While",
        serviceType: "Test Step (s)",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "at step3",
        stepData: "",
        refId: "STEP_12432579860045",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 7,
        idHead: 4.1,
        action: "Check",
        serviceType: "ECU Variable",
        description: "bM_AEBv_FeatureEnable",
        desiredValue: 1,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_12432579892899",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 8,
        idHead: 4.2,
        action: "Check",
        serviceType: "ECU Variable",
        description: "eM_AEBv_StateCmdArb",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14355501351455",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 9,
        idHead: 4.3,
        action: "Check",
        serviceType: "ECU Variable",
        description: "bM_AEBv_CommandBraking",
        desiredValue: 1,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14345379986679",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 10,
        idHead: 4.4,
        action: "Check",
        serviceType: "ECU Variable",
        description: "eM_AEBv_CommandType",
        desiredValue: 3,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14267129343378",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 11,
        idHead: 4.5,
        action: "Check",
        serviceType: "ECU Variable",
        description: "s16M_AEBv_CommandDecel",
        desiredValue: -49,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14260049469465",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 12,
        idHead: 4.6,
        action: "Check",
        serviceType: "ECU Variable",
        description: "eM_AEBv_CommandRamp",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14272944933139",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 13,
        idHead: 4.7,
        action: "Check",
        serviceType: "CAN Signal",
        description: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRpRt",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14287302426561",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 14,
        idHead: 4.8,
        action: "Check",
        serviceType: "CAN Signal",
        description: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRqd",
        desiredValue: 1,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14292457289519",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 15,
        idHead: 4.9,
        action: "Check",
        serviceType: "CAN Signal",
        description: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRqTp",
        desiredValue: 3,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_14298658733006",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 16,
        idHead: 5,
        action: "Run",
        serviceType: "Video",
        description: "LSCMB_40.avi",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "S",
        refId: "STEP_476391786259909",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 17,
        idHead: 6,
        action: "While",
        serviceType: "Test Step (s)",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "at step3",
        stepData: "S",
        refId: "STEP_476391786262280",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 18,
        idHead: 6.1,
        action: "Check",
        serviceType: "ECU Variable",
        description: "bM_FCM_Available",
        desiredValue: 1,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_476391786262675",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 19,
        idHead: 6.2,
        action: "Check",
        serviceType: "ECU Variable",
        description: "eM_AEBr_RequestRamp",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_476391786263070",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 20,
        idHead: 6.3,
        action: "Check",
        serviceType: "ECU Variable",
        description: "s16M_AEBr_RequestDecel",
        desiredValue: 1,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_476391786263465",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 21,
        idHead: 6.4,
        action: "Check",
        serviceType: "CAN Signal",
        description: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRpRt",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_1102265774455735",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Test Sequence",
        id: 22,
        idHead: 6.5,
        action: "Check",
        serviceType: "CAN Signal",
        description: "CIB_Autonomous_Braking_Req_HE.FCACBSC_CtrlAcc",
        desiredValue: 2,
        extensions: "",
        comments: "",
        stepData: "SS",
        refId: "STEP_476391786265045",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Post Conditions",
        id: 23,
        idHead: "#",
        action: "Post Conditions",
        serviceType: "",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "",
        refId: "STEP_12432580581960",
        extensionsHideInfomation: "",
        extnId: "",
      },
      {
        type: "Post Conditions",
        id: 24,
        idHead: 1,
        action: "Stop",
        serviceType: "Video",
        description: "",
        desiredValue: "",
        extensions: "",
        comments: "",
        stepData: "S",
        refId: "STEP_14869537325137",
        extensionsHideInfomation: "",
        extnId: "",
      },
    ],
    ParametersList: [
      {
        no: 1,
        name: "NonDriven_Wheel_Grnd_Velocity_HE.WhlGrndVlctyRtNnDrvn",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: 0,
        maximumvalue: 511.96875,
        datatype: "Float",
        factor: 0.03125,
        units: "km / h",
        longshortname: "Wheel Ground Velocity Right Non Driven",
        labelid: "L_1720903242539981",
        offset: 0,
        referencenumber: "(TestCase-1524116167401,STEP_12432579791779,3)",
        labeltype: "NA",
      },
      {
        no: 2,
        name: "NonDriven_Wheel_Grnd_Velocity_HE.WhlGrndVlctyLftNnDrvn",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: 0,
        maximumvalue: 511.96875,
        datatype: "Float",
        factor: 0.03125,
        units: "km / h",
        longshortname: "Wheel Ground Velocity Left Non Driven",
        labelid: "L_1720903242541688",
        offset: 0,
        referencenumber: "(TestCase-1524116167401,STEP_13916241654360,3)",
        labeltype: "NA",
      },
      {
        no: 3,
        name: "bM_AEBv_FeatureEnable",
        commonname: "",
        defaultvalue: "",
        minimumvalue: 0,
        maximumvalue: 255,
        datatype: "UBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726727159586",
        offset: "",
        referencenumber:
          "(TestCase-1524116167401,STEP_12432579892899,3)*(TestCase-1524116167401,STEP_14260049469465,3)*(TestCase-1524116167401,STEP_14267129343378,3)",
        labeltype: "Measurement",
      },
      {
        no: 4,
        name: "eM_AEBv_StateCmdArb",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -128,
        maximumvalue: 127,
        datatype: "SBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726728105048",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_14355501351455,3)",
        labeltype: "Measurement",
      },
      {
        no: 5,
        name: "bM_AEBv_CommandBraking",
        commonname: "",
        defaultvalue: "",
        minimumvalue: 0,
        maximumvalue: 255,
        datatype: "UBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726727150200",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_14345379986679,3)",
        labeltype: "Measurement",
      },
      {
        no: 6,
        name: "eM_AEBv_CommandType",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -128,
        maximumvalue: 127,
        datatype: "SBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726728100355",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_14267129343378,3)",
        labeltype: "Measurement",
      },
      {
        no: 7,
        name: "s16M_AEBv_CommandDecel",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -32768,
        maximumvalue: 32767,
        datatype: "SWORD",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726731041271",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_14260049469465,3)",
        labeltype: "Measurement",
      },
      {
        no: 8,
        name: "eM_AEBv_CommandRamp",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -128,
        maximumvalue: 127,
        datatype: "SBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726728099075",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_14272944933139,3)",
        labeltype: "Measurement",
      },
      {
        no: 9,
        name: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRpRt",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: 0,
        maximumvalue: 7,
        datatype: "Enum",
        factor: 1,
        units: "",
        longshortname:
          "Forward Collision Alert Control Brake System Command : Automatic Braking Ramp Rate",
        labelid: "L_1720903242731548",
        offset: 0,
        referencenumber:
          "(TestCase-1524116167401,STEP_14287302426561,3)*(TestCase-1524116167401,STEP_1102265774455735,3)",
        labeltype: "NA",
      },
      {
        no: 10,
        name: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRqd",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: 0,
        maximumvalue: 1,
        datatype: "",
        factor: 1,
        units: "",
        longshortname:
          "Forward Collision Alert Control Brake System Command : Automatic Braking Requested",
        labelid: "L_1720903242732828",
        offset: 0,
        referencenumber: "(TestCase-1524116167401,STEP_14292457289519,3)",
        labeltype: "NA",
      },
      {
        no: 11,
        name: "CIB_Autonomous_Braking_Req_HE.FCACBSC_AutBrkRqTp",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: 0,
        maximumvalue: 15,
        datatype: "Enum",
        factor: 1,
        units: "",
        longshortname:
          "Forward Collision Alert Control Brake System Command : Automatic Braking Request Type",
        labelid: "L_1720903242731975",
        offset: 0,
        referencenumber: "(TestCase-1524116167401,STEP_14298658733006,3)",
        labeltype: "NA",
      },
      {
        no: 12,
        name: "bM_FCM_Available",
        commonname: "",
        defaultvalue: "",
        minimumvalue: 0,
        maximumvalue: 255,
        datatype: "UBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726727234677",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_476391786262675,3)",
        labeltype: "Measurement",
      },
      {
        no: 13,
        name: "eM_AEBr_RequestRamp",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -128,
        maximumvalue: 127,
        datatype: "SBYTE",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726728095235",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_476391786263070,3)",
        labeltype: "Measurement",
      },
      {
        no: 14,
        name: "s16M_AEBr_RequestDecel",
        commonname: "",
        defaultvalue: "",
        minimumvalue: -32768,
        maximumvalue: 32767,
        datatype: "SWORD",
        factor: "",
        units: "",
        longshortname: "",
        labelid: "L_1720726731039137",
        offset: "",
        referencenumber: "(TestCase-1524116167401,STEP_476391786263465,3)",
        labeltype: "Measurement",
      },
      {
        no: 15,
        name: "CIB_Autonomous_Braking_Req_HE.FCACBSC_CtrlAcc",
        commonname: "",
        defaultvalue: 0,
        minimumvalue: -20.48,
        maximumvalue: 20.47,
        datatype: "Float",
        factor: 0.01,
        units: "m/s^2",
        longshortname:
          "Forward Collision Alert Control Brake System Command : Control Acceleration",
        labelid: "L_1720903242728988",
        offset: 0,
        referencenumber: "(TestCase-1524116167401,STEP_476391786265045,3)",
        labeltype: "NA",
      },
    ],
    diagnostics: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    summaryCategoriesModifyflag: false,
    descriptionModifyflag: false,
    testStepsModifyflag: true,
    preconditionModifyflag: true,
    postconditionModifyflag: true,
    expectedResultsModifyflag: true,
    parameterPtclistModifyflag: true,
    StateModifyflag: false,
    priorityModifyflag: false,
    tocommentModifyflag: true,
    statusflag: true,
    traceabiltyMofifyflag: false,
    mitescriptflag: false,
  },
};
