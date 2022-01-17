import { createStore } from "redux";

const initialState = {
  basicDetails1: {
    firstname: null, //
    lastname: null, //
    teamName: null,
    pronoun: null,
  },
  basicDetails2: {
    collegeEmailId: null, //y
    contactNumber: null, //
    collegeName: null,
    currentYear: null,
  },
  teamOrSolo: null,
  teamLeaderDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  secondMemberDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  thirdMemberDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  attendedOtherEvent: null,
  whichOne: null,
  source: null,
  isLightTheme: true,
};

const reducerFunction = (state = initialState, action) => {
  if (action.type === "basicDetailsOne") {
    let newState = { ...state };
    const obj = {
      firstName: action.data.firstName,
      lastName: action.data.lastName,
      teamName: action.data.teamName,
      pronoun: action.data.pronoun,
    };
    newState.basicDetails1 = {
      ...obj,
    };
    localStorage.setItem("basicDetailsOne", JSON.stringify(obj));
    console.log("basicDetailsOne");
    console.log(newState);
    return newState;
  } else if (action.type === "basicDetailsTwo") {
    let newState = { ...state };
    const obj = {
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
      collegeName: action.data.collegeName,
      currentYear: action.data.currentYear,
    };
    newState.basicDetails2 = {
      ...obj,
    };
    localStorage.setItem("basicDetailsTwo", JSON.stringify(obj));
    console.log("basicDetailsTwo");
    console.log(newState);
    return newState;
  } else if (action.type === "teamOrSolo") {
    let newState = { ...state };
    newState.teamOrSolo = action.teamOrSolo;
    localStorage.setItem("teamOrSolo", action.teamOrSolo);
    console.log("teamOrSolo");
    console.log(newState);
    return newState;
  } else if (action.type === "teamLeaderDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.teamLeaderDetails = {
      ...obj,
    };
    localStorage.setItem("teamLeaderDetails", JSON.stringify(obj));
    console.log("teamLeaderDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "secondMemberDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.secondMemberDetails = {
      ...obj,
    };
    localStorage.setItem("secondMemberDetails", JSON.stringify(obj));
    console.log("secondMemberDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "thirdMemberDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.thirdMemberDetails = {
      ...obj,
    };
    localStorage.setItem("thirdMemberDetails", JSON.stringify(obj));
    console.log("thirdMemberDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "attendedOtherEvent") {
    let newState = { ...state };
    newState.attendedOtherEvent = action.attendedOtherEvent;
    localStorage.setItem("attendedOtherEvent", action.attendedOtherEvent);
    console.log("attendedOtherEvent");
    console.log(newState);
    return newState;
  } else if (action.type === "whichOne") {
    let newState = { ...state };
    newState.whichOne = action.whichOne;
    localStorage.setItem("whichOne", action.whichOne);
    console.log("whichOne");
    console.log(newState);
    return newState;
  } else if (action.type === "source") {
    let newState = { ...state };
    newState.source = action.source;
    localStorage.setItem("source", action.source);
    console.log("source");
    console.log(newState);
    return newState;
  } else if (action.type === "toggleTheme") {
    let newState = { ...state };
    newState.isLightTheme = !state.isLightTheme;
    localStorage.setItem("toggleTheme", newState.isLightTheme);
    console.log(newState.isLightTheme);
    return newState;
  } else if (action.type === "deleteBasicDetailsOne") {
    let newState = { ...state };
    newState.basicDetails1 = initialState.basicDetails1;
    localStorage.removeItem("basicDetailsOne");
    console.log("delete basic detail one");
    console.log(newState);
    return newState;
  } else if (action.type === "deleteBasicDetailsTwo") {
    let newState = { ...state };
    newState.basicDetails2 = initialState.basicDetails2;
    localStorage.removeItem("basicDetailsTwo");
    console.log("delete basic detail two");
    console.log(newState);
    return newState;
  } else if (action.type === "deleteFormThreeDetails") {
    let newState = { ...state };
    newState.teamOrSolo = initialState.teamOrSolo;
    newState.teamLeaderDetails = initialState.teamLeaderDetails;
    newState.secondMemberDetails = initialState.secondMemberDetails;
    newState.thirdMemberDetails = initialState.thirdMemberDetails;
    localStorage.removeItem("teamLeaderDetails");
    localStorage.removeItem("secondMemberDetails");
    localStorage.removeItem("thirdMemberDetails");
    console.log("delete details of third form");
    console.log(newState);
    return newState;
  } else if (action.type === "fetchLocalState") {
    let newState = {
      basicDetails1: {
        ...JSON.parse(localStorage.getItem("basicDetailsOne")),
      },
      basicDetails2: {
        ...JSON.parse(localStorage.getItem("basicDetailsTwo")),
      },
      teamOrSolo: localStorage.getItem("teamOrSolo"),
      teamLeaderDetails: {
        ...JSON.parse(localStorage.getItem("teamLeaderDetails")),
      },
      secondMemberDetails: {
        ...JSON.parse(localStorage.getItem("secondMemberDetails")),
      },
      thirdMemberDetails: {
        ...JSON.parse(localStorage.getItem("thirdMemberDetails")),
      },
      attendedOtherEvent: localStorage.getItem("attendedOtherEvent"),
      whichOne: localStorage.getItem("whichOne"),
      source: localStorage.getItem("source"),
      isLightTheme: localStorage.getItem("isLightTheme"),
    };
    console.log("fetched state");
    console.log(newState);
    return newState;
  }

  return state;
};

const store = createStore(reducerFunction);

export default store;
