import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Confetti from "react-confetti";
import { MealsContext } from "../MealsContext/MealsContext";
export function FormReservation(props) {
  const value = useContext(MealsContext);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfGuests, setNumberOfGuest] = useState("");
  const [reservationSuccess, setReservationSuccess] = useState(false);

  function addReservation(event) {
    event.preventDefault();
    setError("");
    if (
      name.trim().length == 0 ||
      numberOfGuests.trim().length == 0 ||
      phone.trim().length == 0 ||
      email.trim().length == 0
    ) {
      setError("Don`t leave empty inputs please.");
    } else {
      fetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify({
          number_of_guests: numberOfGuests,
          meal_id: props.id,
          created_date: value.getTodaysDate(),
          contact_name: name,
          contact_phonenumber: phone,
          contact_email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setReservationSuccess(true);
            alert("Reservation is booked succesfully");
            props.reloadReservations();
            setEmail("");
            setName("");
            setPhone("");
            setNumberOfGuest("");
            setTimeout(() => setReservationSuccess(false), 40000); // Reset reservation success after 5 seconds
          }
        })
        .catch((error) => {
          alert(error);
          setError(true);
          console.log(error);
        });
    }
  }
  return (
    <>
      <p className="error-text">{error}</p>
      <div className="reservation-form">
        <form onSubmit={addReservation} style={{ color: "white" }}>
          <label htmlFor="POST-name"> Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="POST-name"
          />
          <label htmlFor="POST-number-of-guests"> Number of guests: </label>
          <input
            type="number"
            value={numberOfGuests}
            min="1"
            max={props.availRes}
            onChange={(e) => setNumberOfGuest(e.target.value)}
            name="number-of-guests"
            id="POST-number-of-guests"
          />
          <label htmlFor="POST-phone"> Phone: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            id="POST-phone"
          />
          <label htmlFor="POST-email"> Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="POST-email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {reservationSuccess && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false} // Stops confetti from falling again
          numberOfPieces={200} // Adjust the number of confetti pieces
          gravity={0.1} // Adjust the gravity to control the falling speed
          wind={0} // Set wind to 0 to make the confetti fall straight down
          run={reservationSuccess} // Start confetti animation when reservation is successful
          onConfettiComplete={() => setReservationSuccess(false)} // Reset reservation success state after confetti animation
        />
      )}
    </>
  );
}
