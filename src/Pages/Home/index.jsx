import React from 'react';
import WorkoutProgram from "./Section3/workoutProgram";
import PopularExercise from "./Section2/populerExecise";
import Cardio from "./Section1/Cardio";



const Home = () => {
    return (
        <>
            <Cardio/>
            <PopularExercise/>
            <WorkoutProgram />

        </>
    );
};

export default Home;
