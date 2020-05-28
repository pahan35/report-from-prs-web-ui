import {Dialog, DialogContent, DialogTitle} from 'mdc'
import React from 'react'

export default function ReportModal({onClose, open}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reports</DialogTitle>
      <DialogContent>TODO pass and render reports</DialogContent>
    </Dialog>
  )
}
