export const manageEventsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/events/manage-events?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
