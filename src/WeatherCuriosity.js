import React, { useState , useEffect } from "react";
import "./WeatherCuriosity.css";

export default function WeatherCuriosity(props) {

    const curiosityArray = [ 
        "A hurricane is a very powerful storm. Weather officers on board at \"Hurricane Hunter\" plane, take measurements to see what the storm will do next.",
         "In the McMurdo Dry valleys, in Antartica, no rain has fallen there for probably two million years", 
        "Death Valley, in USA, holds the record for the hottest air temperature on Earth - 56.7°C (134°F)", 
        "Plane trails are lines of clouds made from tiny ice crystals", 
        "The weathervane is a object that people put on the roof of a building and it's there to tell you the direction of the wind", 
        "Tornadoes are violent wind storms that spin in a funnel shape. Tornadoes reach down to the ground below large storms. They can rip up trees and tear through houses.", 
        "There are stories that, at the end of a rainbow, there are pots of gold, magical creatures and bridges to other worlds, but you'll never be able to reach the end to find out, because the rainbow move as you do.", 
        "Rainbows are made of light from the sun and raindrops that split the sunlight in different colours - violet, indigo, blue, green, yellow, orange, red.", 
        "The rain is made by droplets in the sky. The sun heats water into a gas and it rises up into the sky. The gas cools and turns into clouds of water droplets. When the droplets get too heavy, the fall as rain.", 
        "The anemometer measures the speed of the wind",
        "The barometer measures the air pressure (the weight of air pushing around you). The air pressure gives clues for what the weather might di next.",
        "The rain gauge measures how much rain there's been, for example how many mm (or inches) of rain as fallen in 24 hours.",
        "The weather balloon measures air pressure, wind direction, wind speed and humidity (how much water is in the air). The balloon carries a collection of small instruments high up into the sky",
        "Mist and fog are both very low clouds, but fog is thicker and harder to see through than mist. In mist you can see between 1 and 2 km (0.6 and 1.2 miles). In fog, you can't see further than 1 km (0.6 miles).",
        "Hail fall when water droplets are whooshed up inside storm clouds. They freeze, start to drop, get whooshed up again and finally fall as hailstones. In violent storms, hailstones can be as big as golf balls.",
        "On freezing cold days, when clouds of ice crystals form in the sky, it will snow. If there are enough ice crystals, they join together and fall as snowflake.",
        "It's hard to know when a storm goes away. But you can tell if a storm is moving away by the gap between the lightning and the thunder. For example, 12 seconds means it's 4 km away. Light travels faster than sound, so we see lightning before we hear thunder.The longer the gap between the two, the further away the storm.",
        "The sun rise and set dependently where you live and on the time of the year. At the Equator, around the middle of the Earth, the sun rises at 6am and sets at 6pm. Further north and south, the days get shorter in the winter and longer in the summer. In Iceland in winter the sun rises at 11am and sets at 4pm, but in summer, the sun rises at 3.30am and sets at 11.30pm.",
        "Lightning flash during thunderstorms, when lots of movement inside the storm clouds makes electricity.",
        "The hurricane season is between 1st June and 30th November. Hurricanes are tropical storms that start over the Atlantic Ocean. They are most common in September, after the summer sun has warmed up the ocean.",
        "The sun feels hottest in the early afternoon when it's had time to warm up the air.  In the morning and evening, its rays are more spread out and less strong.",
        "When there's a wild storm you can see the Mammatus: strange lumpy clouds appear under the top of the storm cloud.",
        "When wet weather is on its way tou can see the Cirrostratus: they are thin and wispy and high in the sky.",
        "On bright, sunny days you can see Cumulus clouds.",
        "Very rarely, when most air blows up and over mountains, you can see Lenticular clouds.",
        "Clouds might feel cold and damp, but there's nothing solid to touch. That's why planes can fly straight through them.",
        "Sleet is a mixture between rain and snow. It can be soft and slushy or fall as hard little ice pellets.",
        "Also on other planets there is weather: there are sandstorms on Mars, a storm has been raging on Jupiter for hundreds of years, Saturn has incredibly fast winds and on Neptune and Uranus, scientists think it might rain diamonds!",
        "Sheet lightning is the most common form of lightning. It happens when a lightning bolt never leaves the cloud where it's made.",
        "Fork lightning is a kind of cloud to ground lightning. Tall buildings have lightning rods to guide lightning strikes safely to the ground.",
        "Spider lightning is when bolts of lightning make a spider shape on the underside of clouds.",
        "Bead lightning is the most common form that lightning turns as their light breaks up. Then they disappear.",
        "A mobile home was once carried the distance of four football pitches and the men inside lived to tell the tale!",
        "You can have a go on weather predictions. Here are some rhymes to help you. \"Ring around the moon? Rain real soon.\", \"Clear moon? Frost soon.\", \"Red sky in the morning? Bad weather warning.\", \"Red sky at night? Tomorrow will be bright.\"",
        "The weather is important because we need the right balance of sun and rain for our food to grow, to keep us warm and give us water to drink.",
        "Where you are on Earth is tilting toward the sun, so the sun's rays are more direct. The temperature and the seasons change as the Earth moves around the sun. Winter is when where you are on Earth tilts away from the sun so the sun's rays are less direct.",
        "You can find web wets in the morning, because the ground has become cold overnight and moisture in the air has turned to water droplets on the cold surfaces. The droplets are called dew.",
        "It rains more in the mountains because mountains force warm, moist air to rise higher, where it's colder. The air cools and can't hold so much moisture, so it falls as rain.",
        "Some clouds are darker than others because they contain more water droplets. The droplets scatter the sun's light so only a little gets through and the cloud looks darker from below.",
        "Floods happen because there's been more rain than usual. It forms pools and runs into rivers. Rivers can get so high, they burst their banks.",
        "It doesen't rain in the desert because the air is very dry. Any moisture has already fallen as rain elsewhere. A desert is an area that receives less than 25cm (10 inches) of rain or snow a year.",
        "When heavy snow is falling, it's called whiteout and you can't see anything, only dark shapes, but you can't tell where the land becomes sky!",
        "Some houses have solar panels to take energy from the sun and use it to make electricity. An hour of sunlight on Earth has enough energy to power all our homes and offices for a whole year.",
        "Weather satellites scan the earth from space to form images of what's going on, for example where the next big storm is developing.",
        "There are 5 different categories of hurricanes, ranging from dangerous winds that knock down sheds and blow off roof tiles to deadly winds of over 250km/h (150 mph) that uproot trees and flatten buildings.",
        "The highest clouds are up to 12km (8.5 miles) above Earth. The lowest clouds can touch the ground. Some stretch all the way from high to low.",
        "The surface of the sun is 50 times hotter than boiling water and its core is 500 times hotter than lightning!",
        "The snowflakes forms first when an ice crystal forms around a speck of dust. Then more ice crystals join on, branching out in a regular, symmetrical pattern.",
        "A raindrop is big between 0.5mm and 4mm (0.02 - 0.2 inches). They start off as round dots, then spread as they get bigger, until they split into two raindrops.",
        "The record of rain fall in one minute is 38mm (1.5 inches) that fell in the islands of Guadeloupe in 1970. The most rain in one hour was 305mm (12 inches) in the USA in 1947.",
        "The coldest recorded temperature is -89.2°C (-128.6°F), in Antarctica. That's almost five times colder than your freezer!",
        "Cumulonimbus clouds (dark, billowing storm clouds) bring the heaviest rain. Nimbostratus clouds (low, grey sheets of cloud) bring more continuous rain.",
        "There are some ways to find out which way the wind is blowing. Drop some grass or leaves and see which way they go. Lick your finger and hold it up. Which side feels colder? You can also see which way the trees are swaying.",
        "Venus is the hottest planet. It's over four times hotter than boiling water! Mercury is nearer to the sun, but Venus is hotter because it's covered by a thick layer of gas that keeps in the heat.",
        "Based on land area, probably the Japan is the country that gets the most snow. Each year there are snow festivals, with sculptures made of snow and ice. The snow gets so high, roads have to be carved out for people to travel.",
        "Many animals sense a drop in air pressure and can predict storms. Sharks swim deeper, birds and bees take shelter and frogs become louder."];
        
   
   const [curiosity, setCuriosity] = useState("");
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
    setLoaded(false);
    }, [props.coordinates]);

   
   function fetchCount() {
    const curiosityCount = Math.floor(Math.random() * curiosityArray.length);
       setCuriosity(curiosityCount);
       setLoaded(true);
   }

    if (loaded) {
    return (
        <div className="WeatherCuriosity">
          <h4>Did you know?</h4>
        {curiosityArray[curiosity]}
        </div>
    );} else {
        fetchCount();
    }
      
 }
