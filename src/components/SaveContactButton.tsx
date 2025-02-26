// 'use client';

import { Contacts } from "@capacitor-community/contacts"


// type Contact = {
//   name: string;
//   tel: string[];
//   email?: string[];
// };

// interface NavigatorExtended extends Navigator {
//   contacts?: {
//     save: (contacts: Contact[]) => Promise<void>;
//   };
// }

// const SaveContactButton = () => {
//   const saveContact = async () => {
//     const nav = navigator as NavigatorExtended;
    
//     if (nav.contacts?.save) {
//       try {
//         const contact: Contact = {
//           name: 'John Doe',
//           tel: ['+1234567890'],
//           email: ['johndoe@example.com']
//         };
        
//         await nav.contacts.save([contact]);
//         alert('Contact saved successfully!');
//       } catch (error) {
//         console.error('Failed to save contact:', error);
//       }
//     } else {
//       alert('Contacts API not supported on this device.');
//     }
//   };

//   return (
//     <button onClick={saveContact} className="p-2 bg-blue-500 text-white rounded">
//       Save Contact
//     </button>
//   );
// };

// export default SaveContactButton;

// import { Plugins } from '@capacitor/core';
// const { Contacts } = Plugins;

// import { Contacts } from "@capacitor-community/contacts";

// async function fetchContacts() {
//   // Request permission to access contacts (necessary for Android)
//   const permission = await Contacts.requestPermissions();
//   if (!permission.contacts) {
//     console.warn('Permission to access contacts was denied.');
//     return;
//   }

//   // Define the fields to retrieve
//   const projection = {
//     name: true,
//     phones: true,
//     emails: true,
//   };

//   try {
//     // Fetch contacts with the specified projection
//     const result = await Contacts.getContacts({ projection });
//     const contacts = result.contacts;

//     // Process the retrieved contacts
//     contacts.forEach((contact) => {
//       console.log('Name:', contact.name);
//       console.log('Phone Numbers:', contact.phones);
//       console.log('Emails:', contact.emails);
//     });
//   } catch (error) {
//     console.error('Error fetching contacts:', error);
//   }
// }
// // Call the function to fetch contacts
// fetchContacts();


// export default function SaveContactButton(){
//     const permissionStatus = await Contacts.requestPermissions()

//     if (permissionStatus.contacts === "granted") {
//       await Contacts.createContact({
//         contact: {
//           name: {
//             given: contact.givenName,
//             family: contact.familyName,
//           },
//           phoneNumbers: [
//             {
//               label: "mobile",
//               number: contact.phoneNumber,
//             },
//           ],
//         },
//       })
//   return <div className=''>SaveContactButton</div>
// }