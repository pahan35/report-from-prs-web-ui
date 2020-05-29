import ReportModal from 'Components/ReportModal'
import {Button, Grid, GridCell, TextField} from 'mdc'
import React, {useState} from 'react'

function fakePRs(repo, from, to) {
  const prs = []
  for (let i = from; i < to; i += 1) {
    prs.push({
      html_url: `https://github.com/${repo}/pull/${i}`,
      title: `Fake PR ${i}`,
    })
  }
  return prs
}

function fetchReports({forDays, repo, user}) {
  return new Promise(resolve => {
    console.log('Making requests with', {forDays, repo, user})
    setTimeout(() => {
      resolve({
        done: fakePRs(repo, 1, 5),
        wip: fakePRs(repo, 8, 10),
      })
    }, 350)
  })
}

export default function RequestReport() {
  const [forDays, setForDays] = useState(7)
  const [repo, setRepo] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [reports, setReports] = useState()

  const getReports = async () => {
    setLoading(true)
    setReports(await fetchReports({forDays, repo, user}))
    setOpenModal(true)
    setLoading(false)
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
      <ReportModal
        open={openModal}
        reports={reports}
        onClose={() => setOpenModal(false)}
      />
    </Grid>
  )
}
