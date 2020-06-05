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
  try {
    const { rows } = await postgres.query('INSERT INTO s_02052020test.study_subject(study_subject_id, label, secondary_label, subject_id, study_id, status_id, enrollment_date, date_created, date_updated, owner_id, update_id, oc_oid, time_zone, user_id, user_status_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);', [study_subject_id, label, secondary_label, subject_id, study_id, status_id, enrollment_date, date_created, date_updated, owner_id, update_id, oc_oid, time_zone, user_id, user_status_id])
    res.json(rows)
  } catch (error) {
    console.log('ERROR ', error)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const { rows } = await postgres.query('DELETE FROM s_02052020test.study_subject WHERE study_subject_id=$1', [req.params.id])
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
})
