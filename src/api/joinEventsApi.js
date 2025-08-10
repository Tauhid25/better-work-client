export const joinEventsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/join-events?email=${email}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) =>
    res.json()
  );
};
