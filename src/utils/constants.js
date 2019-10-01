import os from "os";

export const hostname = os.hostname();

export const mediaPrefix = `http://${hostname}:8000/media/client/`;

export const STUDENT = "student";
export const STAFF = "staff";

export const COURSES = [
  { name: "Advanced Software Engineering", code: "CZ3002", group: "TS4" }
];

export const ATTENDANCE = [
  {
    index: "16604",
    type: "lab",
    date: "08-09-19",
    time: "10:30",
    duration: "1 hour",
    status: "present"
  },
  {
    index: "15604",
    type: "tut",
    date: "09-09-19",
    time: "10:30",
    duration: "1 hour",
    status: "present"
  }
];

export const LAB_STATS = [
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" }
];

export const TUT_STATS = [
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" },
  { index: "11030", rate: "45/46", date: "09-04-19", time: "1030" }
];
