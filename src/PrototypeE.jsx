import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import './PrototypeE.css';

export default function PrototypeE() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle escape key to close popup
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showPopup) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showPopup]);

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
    { id: 'add', label: 'Add Entry', icon: '➕' },
    { id: 'edit', label: 'Edit Entry', icon: '✏️' },
    { id: 'delete', label: 'Delete Entry', icon: '🗑️' },
    { id: 'refresh', label: 'Refresh Table', icon: '🔄' },
  ];

  const handleButtonAction = (action) => {
    const messages = {
      add: 'Adding new entry to the trip list...',
      edit: 'Opening edit mode for selected entry...',
      delete: 'Deleting selected entry from the trip list...',
      refresh: 'Refreshing the trip list data...'
    };
    
    setPopupMessage(messages[action]);
    setShowPopup(true);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
      <div className="prototype-wrapper">
             
    <div className="prototype-container">
      <div className="pros-cons-section">
        <h2 className="comparison-title">Library vs Custom Tooltip Implementation</h2>
        <h3>✅ Pros</h3>
        <ul>
          <li>Easy setup – simple API, minimal boilerplate.</li>
          <li>Accessibility improvements over custom solutions – supports focus (not just hover), adds proper ARIA roles (role="tooltip", aria-describedby), and makes tooltips usable with screen readers.</li>
          <li>Cross-browser reliability – consistent hover/focus behavior across browsers.</li>
          <li>Customizable – styles can be overridden with CSS.</li>
          <li>Stable & lightweight – doesn't bloat your bundle.</li>
        </ul>
        
        <h3>❌ Cons</h3>
        <ul>
          <li>Accessibility is not perfect – newer libraries like Radix UI Tooltip or Floating UI do a more thorough job with WCAG/WAI-ARIA best practices.</li>
          <li>Styling is manual – you need to write CSS to make it fit your design system.</li>
          <li>Limited flexibility – fewer features (animations, advanced positioning) compared to Tippy.js or Floating UI.</li>
          <li>Older design approach – not headless, less composable if you want fine-grained control.</li>
        </ul>
      </div>
      
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
              data-tooltip-id={`row-tooltip-${row.id}`}
                             data-tooltip-html={`Phone: ${row.travellerPhone}<br/>Price: ${row.price}`}
            >
              <td>{row.travellerName}</td>
              <td>{row.pickupDate}</td>
              <td>{row.pickupTime}</td>
              <td>{row.fromStreet}</td>
              <td>{row.toStreet}</td>
              <td>
                <span className={getStatusClass(row.status)}>{row.status}</span>
              </td>
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
               data-tooltip-id={`button-tooltip-${btn.id}`}
               data-tooltip-content={btn.label}
               onClick={() => handleButtonAction(btn.id)}
               onKeyDown={(e) => {
                 if (e.key === 'Enter' || e.key === ' ') {
                   e.preventDefault();
                   handleButtonAction(btn.id);
                 }
               }}
             >
               {btn.icon}
             </button>
          </div>
        ))}
      </div>
      
      {/* React Tooltip Components */}
                     {data.map((row) => (
          <Tooltip
            key={`row-tooltip-${row.id}`}
            id={`row-tooltip-${row.id}`}
            place="right"
            className="custom-tooltip"
          />
        ))}
      
      {buttons.map((btn) => (
        <Tooltip
          key={`button-tooltip-${btn.id}`}
          id={`button-tooltip-${btn.id}`}
          place="top"
          className="custom-tooltip"
                 />
       ))}
       
       {/* Action Popup */}
       {showPopup && (
         <div className="action-popup">
           <div className="popup-content">
             <span className="popup-message">{popupMessage}</span>
             <button 
               className="popup-close"
               onClick={() => setShowPopup(false)}
               aria-label="Close popup"
             >
               ×
             </button>
           </div>
         </div>
       )}
     </div>
      </div>
  );
}
