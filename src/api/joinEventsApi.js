export const joinEventsPromise = (email, accessToken) => {
  return fetch(`https://better-work-server.vercel.app/join-events?email=${email}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) =>
    res.json()
  );
};
