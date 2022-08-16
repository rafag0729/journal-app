import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Mollit laboris elit eu pariatur in tempor ipsum. Incididunt ipsum culpa non aute id ea pariatur pariatur. Voluptate eu in ipsum tempor nulla ullamco ea laborum ipsum id aliqua sint cupidatat ut. Nostrud eu aliqua ea cillum dolore eu nisi. Excepteur pariatur cillum anim deserunt reprehenderit ullamco proident labore ut velit. Labore qui fugiat tempor aute culpa ex occaecat est esse cillum sint excepteur eu.</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

    </JournalLayout>
  )
}
