// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {client} from '../../lib/dynamoDB';

export default async function handler(req, res) {
  const { query: { email }, method} = req

  if (method === 'PUT') {
    var params = {
        Item:{
            "email": email,
        }
    };
    await client.put(params, function(err, data) {
      if (err) {
        res.status(404).json({error: err});
      } else {
        res.status(200).json("Email Added");
      }
    });
  }
  else {
    res.status(404).json({ message: 'HTTP Method Not Supported' })

  }
}
