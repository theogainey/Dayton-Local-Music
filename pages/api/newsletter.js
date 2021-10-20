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
        return res.status(404).json({error: err});
      } else {
        return res.status(200).json("Email Added");
      }
    });
  }
  else {
    return res.status(404).json({ message: 'HTTP Method Not Supported' })
  }
}
