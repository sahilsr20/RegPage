const dataConvert = (state) => {
  let obj = {
    firstname: state.basicDetails1.firstName,
    lastname: state.basicDetails1.lastName,
    pronoun: state.basicDetails1.pronoun,
    teamname: state.basicDetails2.teamName,
    clgmail: state.basicDetails2.collegeEmailId,
    contact: state.basicDetails1.contactNumber,
    mobile: state.basicDetails1.contactNumber,
    clg: state.basicDetails2.collegeName,
    year: state.basicDetails2.currentYear,
    team: state.teamOrSolo === true ? "true" : "false",
    firsttime: state.attendedOtherEvent === true ? "false" : "true",
    // firsttime: !state.attendedOtherEvent,
    advert: state.source,
  };
  if (state.teamOrSolo) {
    obj = {
      ...obj,
      teamleader: {
        firstname: state.teamLeaderDetails.firstname,
        lastname: state.teamLeaderDetails.lastname,
        mobile: state.teamLeaderDetails.contactNumber,
        clgmail: state.teamLeaderDetails.collegeEmailId,
      },
      teamdetails: [
        {
          firstname: state.secondMemberDetails.firstname,
          lastname: state.secondMemberDetails.lastname,
          mobile: state.secondMemberDetails.contactNumber,
          clgmail: state.secondMemberDetails.collegeEmailId,
        },
        {
          firstname: state.thirdMemberDetails.firstname,
          lastname: state.thirdMemberDetails.lastname,
          mobile: state.thirdMemberDetails.contactNumber,
          clgmail: state.thirdMemberDetails.collegeEmailId,
        },
      ],
    };
  }
  if (state.attendedOtherEvent) {
    obj = {
      ...obj,
      event: state.whichOne,
    };
  }
  return obj;
};

export default dataConvert;
