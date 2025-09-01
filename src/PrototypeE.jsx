import React, { useState } from 'react';
import './PrototypeE.css';

export default function PrototypeE() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [focusedBtn, setFocusedBtn] = useState(null);

  const statuses = [
    'COMPLITED',
    'CANCELED',
    'CONFIRMED',
    'IN PROGRESS',
    'PENDING',
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'COMPLITED':
        return 'status completed';
      case 'CANCELED':
        return 'status canceled';
      case 'PENDING':
        return 'status pending';
      case 'IN PROGRESS':
        return 'status progress';
      case 'CONFIRMED':
        return 'status confirmed';
      default:
        return 'status default';
    }
  };

  const data = [
    {
      id: 1,
      travellerName: 'Erik Johansson',
      pickupDate: '2025-09-01',
      pickupTime: '8:00 AM',
      fromStreet: 'Karl Johans gate 15',
      toStreet: 'Storgata 42',
      status: 'COMPLITED',
      price: '$45.00',
      travellerPhone: '+47-22-123-456',
    },
    {
      id: 2,
      travellerName: 'Sofia Andersson',
      pickupDate: '2025-09-02',
      pickupTime: '9:00 AM',
      fromStreet: 'Drottninggatan 8',
      toStreet: 'Sveavägen 67',
      status: 'CANCELED',
      price: '$52.50',
      travellerPhone: '+46-8-987-654',
    },
    {
      id: 3,
      travellerName: 'Lars Nielsen',
      pickupDate: '2025-09-03',
      pickupTime: '10:00 AM',
      fromStreet: 'Strøget 23',
      toStreet: 'Nørrebrogade 89',
      status: 'CONFIRMED',
      price: '$38.75',
      travellerPhone: '+45-33-456-789',
    },
    {
      id: 4,
      travellerName: 'Anna Lindberg',
      pickupDate: '2025-09-04',
      pickupTime: '11:00 AM',
      fromStreet: 'Munkegata 12',
      toStreet: 'Olav Tryggvasons gate 34',
      status: 'IN PROGRESS',
      price: '$41.25',
      travellerPhone: '+47-55-789-123',
    },
    {
      id: 5,
      travellerName: 'Mikael Bergström',
      pickupDate: '2025-09-05',
      pickupTime: '12:00 PM',
      fromStreet: 'Kungsgatan 45',
      toStreet: 'Birger Jarlsgatan 78',
      status: 'PENDING',
      price: '$48.50',
      travellerPhone: '+46-70-321-654',
    },
    {
      id: 6,
      travellerName: 'Hanne Pedersen',
      pickupDate: '2025-09-06',
      pickupTime: '1:00 PM',
      fromStreet: 'Vesterbrogade 56',
      toStreet: 'Østerbrogade 91',
      status: 'COMPLITED',
      price: '$35.00',
      travellerPhone: '+45-40-654-321',
    },
    {
      id: 7,
      travellerName: 'Johan Eriksson',
      pickupDate: '2025-09-07',
      pickupTime: '2:00 PM',
      fromStreet: 'Storgatan 19',
      toStreet: 'Vasagatan 73',
      status: 'CONFIRMED',
      price: '$55.75',
      travellerPhone: '+46-76-987-123',
    },
    {
      id: 8,
      travellerName: 'Maria Hansen',
      pickupDate: '2025-09-08',
      pickupTime: '3:00 PM',
      fromStreet: 'Grønlandsleiret 28',
      toStreet: 'Thorvald Meyers gate 47',
      status: 'IN PROGRESS',
      price: '$42.00',
      travellerPhone: '+47-95-456-789',
    },
    {
      id: 9,
      travellerName: 'Anders Jensen',
      pickupDate: '2025-09-09',
      pickupTime: '4:00 PM',
      fromStreet: 'Gothersgade 31',
      toStreet: 'Store Kongensgade 82',
      status: 'PENDING',
      price: '$39.25',
      travellerPhone: '+45-50-123-456',
    },
    {
      id: 10,
      travellerName: 'Eva Nilsson',
      pickupDate: '2025-09-10',
      pickupTime: '5:00 PM',
      fromStreet: 'Drammensveien 64',
      toStreet: 'Bygdøy allé 16',
      status: 'CANCELED',
      price: '$51.50',
      travellerPhone: '+47-91-789-456',
    },
  ];

  const buttons = [
    { id: 'add', label: 'Add Entry' },
    { id: 'edit', label: 'Edit Entry' },
    { id: 'delete', label: 'Delete Entry' },
    { id: 'refresh', label: 'Refresh Table' },
  ];

  return (
      <div className="prototype-wrapper">
             
    <div className="prototype-container">
      <h2 className="title">Trip List</h2>

      {/* --- Table --- */}
      <table className="trip-table">
        <thead>
          <tr>
            <th>Traveller Name</th>
            <th>Pickup Date</th>
            <th>Pickup Time</th>
            <th>From Street Name</th>
            <th>To Street Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              tabIndex={0}
              className="table-row"
              onMouseEnter={() => setHoveredRow(row.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onFocus={() => setHoveredRow(row.id)}
              onBlur={() => setHoveredRow(null)}
            >
              <td>{row.travellerName}</td>
              <td>{row.pickupDate}</td>
              <td>{row.pickupTime}</td>
              <td>{row.fromStreet}</td>
              <td>{row.toStreet}</td>
              <td>
                <span className={getStatusClass(row.status)}>{row.status}</span>
              </td>

              {hoveredRow === row.id && (
                <div className="row-tooltip">
                  <p>
                    <span className="tooltip-label">Phone:</span>{' '}
                    {row.travellerPhone}
                  </p>
                  <p>
                    <span className="tooltip-label">Price:</span> {row.price}
                  </p>
                  <div className="tooltip-arrow"></div>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- Buttons under table --- */}
      <div className="button-group">
        {buttons.map((btn) => (
          <div key={btn.id} className="button-wrapper">
            <button
              tabIndex={0}
              className="action-button"
              onMouseEnter={() => setFocusedBtn(btn.id)}
              onMouseLeave={() => setFocusedBtn(null)}
              onFocus={() => setFocusedBtn(btn.id)}
              onBlur={() => setFocusedBtn(null)}
            >
              {btn.id.charAt(0).toUpperCase() + btn.id.slice(1)}
            </button>

            {focusedBtn === btn.id && (
              <div className="button-tooltip">
                {btn.label}
                <div className="tooltip-arrow"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
     </div>
  );
}
