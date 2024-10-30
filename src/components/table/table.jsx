import './table.css'

function DetailsTable() {
  const attendanceData = Array.from({ length: 25 }, (_, index) => ({
    time: '10:00 AM',
    name: `Person ${index + 1}`,
    email: `person${index + 1}@example.com`,
    phoneNumber: `${index + 1}-456-7890`,
    reason: 'Present',
  }));

  return <div className='mainTable'>
   <table>
     <thead>
       <tr>
         <th>Time</th>
         <th>Name</th>
         <th>Email</th>
         <th>Phone Number</th>
         <th>Reason</th>
       </tr>
     </thead>
     <tbody>
       {attendanceData.map((data, index) => (
         <tr key={index}>
           <td>{data.time}</td>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td>{data.phoneNumber}</td>
           <td>{data.reason}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>;
}

export default DetailsTable;

