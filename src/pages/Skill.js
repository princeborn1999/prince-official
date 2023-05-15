import Grid from "@mui/material/Grid";
export function Skill() {
  return (
    <div className="p-5 flex justify-center">
      <Grid container spacing={5}>
        <Grid item xs={3} className="bg-blue-400 rounded-lg">
          Node.js
        </Grid>
        <Grid item xs={3}>
          React.js
        </Grid>
        <Grid item xs={3}>
          Angular
        </Grid>
      </Grid>
    </div>
  );
}
