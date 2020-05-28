import ReportModal from 'Components/ReportModal'
import {Button, Grid, GridCell, TextField} from 'mdc'
import React, {useState} from 'react'

export default function RequestReport() {
  const [forDays, setForDays] = useState(7)
  const [repo, setRepo] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const getReports = () => {
    setLoading(true)
    setTimeout(() => {
      setOpenModal(true)
      setLoading(false)
    }, 3500)
  }

  return (
    <Grid>
      <GridCell align="middle" span={12}>
        <TextField
          className="pr-field"
          label="User"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          className="pr-field"
          label="Repo"
          value={repo}
          onChange={e => setRepo(e.target.value)}
        />
        <TextField
          className="pr-field"
          label="For days"
          type="number"
          value={forDays}
          onChange={e => setForDays(e.target.value)}
        />
      </GridCell>
      <GridCell align="middle" span={4}>
        <Button
          disabled={loading}
          onClick={() => {
            getReports()
          }}
        >
          Get Reports
        </Button>
      </GridCell>
      <ReportModal open={openModal} onClose={() => setOpenModal(false)} />
    </Grid>
  )
}
