
$(document).ready(function(){

    $("#skyswordButton").click(function () {
        document.getElementById('skysword-content').style.display = 'flex';
        document.getElementById('skydaria-olympe-content').style.display = 'none';
        document.getElementById('skydaria-pirate-content').style.display = 'none';
        document.getElementById('hadaria-content').style.display = 'none';
        document.getElementById('seasonsky-content').style.display = 'none';
    });

    $("#seasonskyButton").click(function() {
        document.getElementById('skysword-content').style.display = 'none';
        document.getElementById('skydaria-olympe-content').style.display = 'none';
        document.getElementById('skydaria-pirate-content').style.display = 'none';
        document.getElementById('hadaria-content').style.display = 'none';
        document.getElementById('seasonsky-content').style.display = 'flex';
    });

    $("#skydariaOlympeButton").click(function () {
        document.getElementById('skysword-content').style.display = 'none';
        document.getElementById('skydaria-olympe-content').style.display = 'flex';
        document.getElementById('skydaria-pirate-content').style.display = 'none';
        document.getElementById('hadaria-content').style.display = 'none';
        document.getElementById('seasonsky-content').style.display = 'none';
    });

    $("#skydariaPirateButton").click(function () {
        document.getElementById('skysword-content').style.display = 'none';
        document.getElementById('skydaria-olympe-content').style.display = 'none';
        document.getElementById('skydaria-pirate-content').style.display = 'flex';
        document.getElementById('hadaria-content').style.display = 'none';
        document.getElementById('seasonsky-content').style.display = 'none';
    });

    $("#hadariaButton").click(function () {
        document.getElementById('skysword-content').style.display = 'none';
        document.getElementById('skydaria-olympe-content').style.display = 'none';
        document.getElementById('skydaria-pirate-content').style.display = 'none';
        document.getElementById('hadaria-content').style.display = 'flex';
        document.getElementById('seasonsky-content').style.display = 'none';
    });
});