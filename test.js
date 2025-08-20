let savedResolve, savedReject;

const myPromise = new Promise((resolve, reject) => {
  savedResolve = resolve;
  savedReject = reject;
});

myPromise
  .then((value) => console.log("Promise Resolved: ", value))
  .catch((err) => console.log("Promise Rejected: ", err));

setTimeout(() => {
  //   savedResolve("He he etai bastob");
  savedReject("Kono akata error hoye gese");
}, 3000);
