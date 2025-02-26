// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Contacts } from "@capacitor-community/contacts"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "sonner"

// export default function ContactForm() {
//   const [contact, setContact] = useState({
//     givenName: "",
//     familyName: "",
//     phoneNumber: "",
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setContact((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const createContact = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try {
//       // Request permissions first
//       const permissionStatus = await Contacts.requestPermissions()

//       if (permissionStatus.contacts === "granted") {
//         await Contacts.createContact({
//           contact: {
//             name: {
//               given: contact.givenName,
//               family: contact.familyName,
//             },
//             phoneNumbers: [
//               {
//                 label: "mobile",
//                 number: contact.phoneNumber,
//               },
//             ],
//           },
//         })

//         toast.success("Contact created successfully!")

//         // Reset form
//         setContact({
//           givenName: "",
//           familyName: "",
//           phoneNumber: "",
//         })
//       } else {
//         toast.error("Permission to access contacts was denied")
//       }
//     } catch (error) {
//       console.error("Error creating contact:", error)
//       toast.error("Failed to create contact")
//     }
//   }

//   return (
//     <form onSubmit={createContact} className="space-y-6 max-w-md">
//       <div className="space-y-2">
//         <Label htmlFor="givenName">First Name</Label>
//         <Input id="givenName" name="givenName" value={contact.givenName} onChange={handleInputChange} required />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="familyName">Last Name</Label>
//         <Input id="familyName" name="familyName" value={contact.familyName} onChange={handleInputChange} required />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="phoneNumber">Phone Number</Label>
//         <Input
//           id="phoneNumber"
//           name="phoneNumber"
//           type="tel"
//           value={contact.phoneNumber}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <Button type="submit" className="w-full">
//         Create Contact
//       </Button>
//     </form>
//   )
// }

