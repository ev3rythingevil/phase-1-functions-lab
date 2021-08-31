// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
 if (pickup > 42){
     return pickup - 42;
 } else {
     return 42 - pickup;
 }
}
// convert blocks to feet

function distanceFromHqInFeet(pickup){
    if(distanceFromHqInBlocks(pickup) > 42){
        return distanceFromHqInBlocks(pickup) * 264;
    }else {
        return distanceFromHqInBlocks(pickup) * 264;
    }
}

// distance travelled in feet returned from two seperate arguments

function distanceTravelledInFeet(pointA, pointB){
    if (pointA >= pointB){
       return 264 * (pointA - pointB);
    }
      else { return 264 * (pointB - pointA);
              }
}

//  Given the same starting and ending block as the previous test (hint hint), return the fare for the customer.
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
// Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0; }
        else if (distanceTravelledInFeet(start,destination) < 2000 ){
            return .02 * (distanceTravelledInFeet(start,destination) - 400);
        }
        else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
            return 25;
        }

    else if (distanceTravelledInFeet(start,destination) > 2500) { return 'cannot travel that far';
}
}
