import fetch from "node-fetch";

const limitPerPage = 5;
const apiUrl = "https://crmapi.upgrad.com/consumer/v2/profile/list";

async function getMentors(pageNo = 1) {
    let actualUrl = apiUrl + `?page=${pageNo}&size=${limitPerPage}&sort=earliestTimeSlot`;
    let apiResults = await fetch(actualUrl)
        .then(resp => {
            return resp.json();
        });

    return apiResults;
}

async function getAllMentors(pageNo = 1) {
    const results = await getMentors(pageNo);
    console.log("Retreiving data from API for page : " + pageNo);
    if (results.length > 0) {
        return results.concat(await getAllMentors(pageNo + 1));
    } else {
        return results;
    }
};

export { getMentors };
export { getAllMentors };
