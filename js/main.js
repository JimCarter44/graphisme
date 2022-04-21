$(document).ready(function () {
  console.log("test");
  let fullScreenImg = $(".fullScreenImg");
  let doneCountryFull = $("#donCountryFull");
  let weazelFull = $("#weazelFull");
  let afficheJCP = $("#afficheJCPFull");
  let fourFull = $("#fourFull");
  $(".fa-xmark").click(function () {
    fullScreenImg.fadeOut(500);
    weazelFull.fadeOut(500);
    doneCountryFull.fadeOut(500);
    afficheJCP.fadeOut(500);
    fourFull.fadeOut(500);
  });
  $("#fourLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    fourFull.fadeIn(500);
    fullScreenImg.css("display", "flex");
    fourFull.css("display", "flex");
  });
  $("#weazelLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    weazelFull.fadeIn(500);
    fullScreenImg.css("display", "flex");
    weazelFull.css("display", "flex");
  });
  $("#afficheJCPLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    afficheJCP.fadeIn(500);
    fullScreenImg.css("display", "flex");
    afficheJCP.css("display", "flex");
  });
  $("#donCountryLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    doneCountryFull.fadeIn(500);
    fullScreenImg.css("display", "flex");
    doneCountryFull.css("display", "flex");
  });
})
