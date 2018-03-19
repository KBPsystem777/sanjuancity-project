
window.onload = function displayTexts() {

    var texts = {
        h1: "Dakilang Lunsod ng San Juan",
        h5: "Great City of San Juan"
    }

    //var good = JSON.stringify(texts);

    document.getElementById("h1").innerHTML = texts.h1;
    document.getElementById("h5").innerHTML = texts.h5;


    var history = {
        last: "During the pre-Hispanic period, the area of what is now San Juan was a part of the Kingdom of Namayan, whose last recorded rulers were King Lacantagean and his consort, Bouan. After the kingdom and other polities in the islands were absorbed into the Spanish Crown in the late 16th century, the realm of Namayan was christened Santa Ana de Sapa. The present area of San Juan was meanwhile re-classified as a barrio, becoming a small encomienda by 1590.\
            In 1602, the Dominicans built a retreat house in the vicinity for their immediate use, where ageing or convalescing friars stayed.Later, the Order constructed a convent and stone church dedicated to the Holy Cross.To this day, the thrice - rebuilt Santuario del Santo Cristo stands on the same site, adjacent to Aquinas School and Dominican College.\
            In 1783, San Juan was partitioned from Santa Ana but was still a barrio within the Province of Manila.The opening salvo of the Philippine Revolution against Spain took place in San Juan in 1897 when the Katipunan attacked the alamacén(armoury) or polvorín(gunpowder magazine) of the Spanish East Indies colonial government.The town was later incorporated into the Province of Rizal in 1901 under American military rule.\
            On 7 November 1975, President Ferdinand Marcos signed Presidential Decree № 824 that established the National Capital Region, and San Juan was among the towns excised from Rizal Province.Residents ratified the conversion of the municipality into a highly urbanised city on 17 June 2007, pursuant to Republic Act № 9388(\"An Act Converting the Municipality of San Juan into a Highly Urbanized City to be known as the City of San Juan\").",
        presidents: "Although not officially designated as such, San Juan is noted to be the \"Town of Philippine Presidents.\" Four presidents since the Third Republic were official residents of San Juan when they assumed office. They were the Macapagal père et fille, Diosdado Sr. (1961–1965) and Gloria Arroyo (2001–2010); Ferdinand Marcos (1965–1986); and Joseph Estrada (1998–2001), who also served as Mayor when San Juan was still a municipality."
    }
    document.getElementById("history").innerHTML = history.last;
    document.getElementById("history-presidents").innerHTML = history.presidents;






}



