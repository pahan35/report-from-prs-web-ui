import {Dialog, DialogContent, DialogTitle} from 'mdc'
import React from 'react'

function ReportSection({label, reports}) {
  return (
    <div>
      <span>{label}</span>
      {reports
        ? reports.map(({html_url: htmlUrl, title}) => (
            <li key={htmlUrl}>
              {title} [<a href={htmlUrl}>pr</a>]
            </li>
          ))
        : 'No Reports for provided params'}
    </div>
  )
}

export default function ReportModal({onClose, open, reports}) {
  const sections = [
    ['done', 'Done'],
    ['wip', 'WIP'],
  ]
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reports</DialogTitle>
      <DialogContent>
        {reports
          ? sections.map(([key, label]) => (
              <ReportSection key={key} label={label} reports={reports[key]} />
            ))
          : 'No reports yet'}
      </DialogContent>
    </Dialog>
  )
}
