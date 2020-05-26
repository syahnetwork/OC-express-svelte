let express = require('express')
let router = express.Router()
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const postgres = require('./postgres')

app.use(cors())
app.use(bodyParser.json())
app.use('/participant/', router)

router.get('', async (req, res) => {
  const { rows } = await postgres.query('SELECT * FROM s_02052020test.study_subject;')
  res.send(rows)
})

router.post('', async (req, res) => {
  const { label, subject_id, study_id, status_id, owner_id, oc_oid } = req.body
  const { rows } = await postgres.query('INSERT INTO s_02052020test.study_subject(label,subject_id,study_id,status_id,owner_id,oc_oid) VALUES($1,$2,$3,$4,$5,$6);', [label, subject_id, study_id, status_id, owner_id, oc_oid])
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
})
