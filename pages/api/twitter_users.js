export default function handler(req, res) {
  console.log(process.env.TWITTER_BEARER_TOKEN)
  console.log('req.query.handle', req.query.handle)
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
        console.log('response :>> ', response)
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
