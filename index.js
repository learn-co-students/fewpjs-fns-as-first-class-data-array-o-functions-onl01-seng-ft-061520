


function wakeDog(dogName, dogBreed) {
    let wakeDog = (`Wake ${dogName} the ${dogBreed}`)
    console.log(wakeDog);
     {
        return wakeDog 
    }
}

function leashDog(dogName, dogBreed) {
  let leashDog = (`Leash ${dogName} the ${dogBreed}`)
  console.log(leashDog); {
      return leashDog
    }
  }


function walkToPark(dogName, dogBreed) {
  let walkToPark = (`Walk to the park with ${dogName} the ${dogBreed}`)
   console.log(walkToPark); {
       return walkToPark
   }
}

function throwFrisbee(dogName, dogBreed) {
    let throwFrisbee = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(throwFrisbee); {
        return throwFrisbee
    }
}


function walkHome(dogName, dogBreed) {
    let walkHome = (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(walkHome); {
        return walkHome
    }
}

function unleashDog(dogName, dogBreed) {
    let unleashDog = (`Unleash ${dogName} the ${dogBreed}`)
     console.log(unleashDog); {
         return unleashDog
     }
}
 const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

 function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => {
      return fn(dogName, dogBreed)
    })
}
 