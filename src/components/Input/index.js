import React, { useState, useEffect } from "react";

// function BootCamperRecord ({ id }) {
//     const [note, setNote] = useState({});
//     console.log(id);

    // useEffect(() => {
    //     async function getAllNotes () {
    //         const res = await fetch(`http://localhost:5000/notes`);
    //         const data = await res.json();
    //         const { payload } = data;
    //         console.log(payload[0]);
    //         setNote(payload[0]);
    //     }
    //     getAllNotes();
    // }, [id]);

    function BootCamperRecord() {
        const [note, setNote] = useState([]);

    
        useEffect(() => {
            async function getAllNotes () {
                const res = await fetch(`http://localhost:5000/notes`);
                const data = await res.json();
                const { payload } = data;
                console.log(payload);
                setNote(payload);
            }
            getAllNotes();
        }, []);


    return (
        <div>

         {note.map((note)=> {
            return(
            <div>   
            <h4>Name: {JSON.stringify(note.name)}</h4>
            <p>Date: {JSON.stringify(note.meeting_date)}</p>
            <p>Week: {JSON.stringify(note.week_topic)}</p>
            <p>What are you working on? {JSON.stringify(note.summary)}</p>
            <p>What have you enjoyed? {JSON.stringify(note.wins)}</p>
            <p>What are you struggling with? {JSON.stringify(note.challenges)}</p>
            <p>Upcoming goals: {JSON.stringify(note.goals)}</p>
            <p>General career/industry advice: {JSON.stringify(note.aspirations)}</p>
            </div> )
            })
           
        } </div> )
    }
    
export default BootCamperRecord;
//   
//      user_id: 9999,
//      name: "John Doe",

//      meeting_date: 2020-10-02,

//      week_topic: "Week 2 - Javascript",

//      summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

//      challenges: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",

//      wins: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",

//      goals: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",

//      aspirations: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
// 
// },