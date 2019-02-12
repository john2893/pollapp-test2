import React, { Component } from 'react'

export class Attendance extends Component {

    newUserRow(member, i){
        return (
            <tr key={i}>
                <td>{member.name}</td>
                <td>{member.id}</td>
            </tr>
        )
    }
  render() {
    return (
      <div>
        <h2>Attendance - {this.props.audience.length} Members</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Audience Member</th>
                    <th>Socket ID</th>

                </tr>
            </thead>
            <tbody>
                {this.props.audience.map(this.newUserRow)}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Attendance
