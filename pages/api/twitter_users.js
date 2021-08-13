export default function handler(req, res) {
  if (req.method === 'GET') {
    fetch(
      `https://api.twitter.com/2/users/by/username/${req.query.handle}?user.fields=profile_image_url`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    )
      .then((response) => {
        return response.json()
      })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        console.error(error)
        res.status(500).json({ error })
      })
  }
}
