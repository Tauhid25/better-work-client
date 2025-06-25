export const manageEventsPromise = (email, accessToken) => {
  return fetch(`https://better-work-server.vercel.app/events/manage-events?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
