import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Job 01</td>
              <td>20 minutes</td>
              <td>1 day ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Job 01</td>
              <td>20 minutes</td>
              <td>1 day ago</td>
              <td>
                <Status statusColor="yellow">Running</Status>
              </td>
            </tr>
            <tr>
              <td>Job 01</td>
              <td>20 minutes</td>
              <td>1 day ago</td>
              <td>
                <Status statusColor="red">Stopped</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
