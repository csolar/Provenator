class AppStrings {

  static heading = 'Provenator (alpha)'
  static home = 'Home'
  static about = 'About'
  static overview = 'Overview'
  static help = 'Help'
  static create = 'Record Object'
  static read = 'Get Object'
  static events = 'Events'
}

class HomeStrings {

  static heading = 'Home'

  static info = 'Use this application to record digital media objects and to get digital media object information.<br /><br />Read the [About](#/about) section to learn about the origins of **Provenator**.<br /><br />The [Overview](#/overview) section describes a scenario where Alice uses **Provenator** to store information about a photograph she has taken.<br /><br />The [Help](#/help) section gives brief instructions as to how to use **Provenator** - in essence, to store a record about a digital resource, click on the [Record Object](#/create) link and fill in all fields. To retrieve information, click on the [Get Object](#/read) link and upload a digital resource.'

}

class AboutStrings {

  static heading = 'About Provenator'

  static info = '**Provenator** is the result of an academic paper titled: _Fake News - a Technological Approach to Proving the Origins of Content, Using Blockchains_. The article discusses how the trust mechanisms of blockchain technology might be used to combat fake news. The general idea is that content creators must have the ability to store relevant authentication information about their creations so that the data can be retrieved and used to prove the ownership and licensing of those same resources.<br /><br />For more information about **Provenator**, please contact s dot huckle at sussex dot ac dot uk.'

}

class OverviewStrings {

  static heading = 'Overview of Provenator'

  static info = 'Suppose Alice, a professional landscape photographer, takes a vivid black and white still of an angry storm gathering over the English Channel (it is about to rage over the seaside town of Brighton). Later, she intends to send the photo to prospective buyers, so she needs to establish ownership and copyright. To do so, she loads the photograph into Provenator (using the [Record Object](#/create) link), which immediately creates a cryptographic hash of the picture _object_ (due to the deterministic and collision resistance properties of cryptographic hashes, that hash will be unique to that image). Alice then adds a description (which should further help identify her picture). She also records an _event_ (the date of the taking of the photo), and lists herself as the _agent_. Finally, Alice creates a _right_ - the image\'s license. <br /><br />Having established ownership rights of the photograph, Alice posts the picture online.<br/><br/>Sometime later, a nature magazine is running a story about climate change, and they intend to use a dramatic weather-based photograph on their front cover.  They find Alice\'s image and wish to identify the owner to discuss the fee for its acquisition.  Hence, they load the image into the [Get Object](#/read) section of Provenator, which matches the cryptographic hash of the _object_ stored by Alice earlier. Consequently, the magazine identifies Alice as the owner of the photograph and arranges with her a fee for its use.'

}

class HelpStrings {

  static heading = 'Help'

  static info = '**Provenator** allows content generators to specify information about their digital creations using PREMIS metadata, which describes a resource using four relations, 1) **Objects**, 2) **Events**, 3) **Agents**, and 4) **Rights**.<br /><br />Have a read of the [Overview](#/overview), which describes a scenario where Alice uses **Provenator** to store information about a photograph she has taken.<br /><br />To store a record about a digital resource, click on the [Record Object](#/create) link. Click on the ![file upload](fileUpload.png) icon to get a cryptographic hash for a digital file. Then fill in the metadata for that file - once you have filled in all fields, click on the ![done](done.png) icon to submit the record. That will create some blockchain transactions, which can be signed in [MetaMask](https://metamask.io/).<br /><br />To retrieve information, click on the [Get Object](#/read) link and upload a digital resource using the ![file upload](fileUpload.png) icon. If no information is retrieved, there are no records for that resource - otherwise, **Provenator** will retrive its metadata.'

}

class HashStrings {

  static heading = 'Select a File Object for Hashing'
  static fileLabel = 'Filename: '
  static hashLabel = 'Hash: '
  static browseFileTip = 'Upload a file to get its cryptohash'

}

class WriterStrings {

  static info = 'Use this form to record information about a media object.'

}

class ReaderStrings {

  static info = 'Use this form to get information about a media object.'

}

class ObjectReaderStrings {

  static heading = 'Object Information'
  static eventHeading = 'Object Event Information'
  static agentHeading = 'Object Agent Information'
  static rightsHeading = 'Object Rights Information'
  static categoryLabel = 'Category: '
  static formatLabel = 'Format: '
  static numPropertiesLabel = 'No. Properties: '
  static propertiesLabel = 'Properties: '

  static numEventsLabel = 'No. Events: '
  static eventLabel = 'Event ID: '
  static eventObjectLabel = 'Event Object: '
  static eventTypeLabel = 'Event Type: '
  static eventAgentLabel = 'Event Agent: '
  static eventTimeLabel = 'Event Time: '

  static numAgentsLabel = 'No. Agents: '
  static agentLabel = 'Agent ID: '
  static agentNameLabel = 'Agent Name: '
  static agentTypeLabel = 'Agent Type: '

  static numRightsLabel = 'No. Rights: '
  static rightsLabel = 'Rights ID: '
  static rightsObjectLabel = 'Rights Object: '
  static rightsBasisLabel = 'Rights Basis: '
  static rightsCopyrightStatusLabel = 'Rights Copyright Status: '
  static rightsCopyrightJurisdictionLabel = 'Rights Copyright Jurisdiction: '
  static rightsCopyrightDeterminationDateLabel = 'Rights Copyright Determination Date: '
  static rightsCopyrightNoteLabel = 'Rights Copyright Note: '
  static rightsGrantedActLabel = 'Rights Granted Act: '
  static rightsGrantedRestrictionLabel = 'Rights Granted Restriction: '
  static rightsAgentLabel = 'Rights Agent: '

  static finishedFetching = 'Finished fetching records from the blockchain.'
  static fetching = 'Fetching file records from the blockchain.'

}

class ObjectWriterStrings {

  static completeAll = 'Please ensure all fields have been completed.'
  static writing = 'Writing records to the blockchain.'
  static finishedWriting = 'Finished writing records to the blockchain.'
  static submitting = 'Submitting records to the blockchain.'
  static submitObjectLabel = 'Submit Object Information:'
  static submitObjectTip = 'Record this object information'
}

class PremisRightsStrings {

  static heading = 'Object Rights Information'
  static basisPlaceHolder = 'Basis'
  static basisTip = 'Choose the object\'s rights basis for this record'
  static statusPlaceHolder = 'Status'
  static statusLabel = 'Status: '
  static statusTip = 'Define the status of the rights basis above, e.g: "Copyrighted", "Licensed"'
  static countryCodePlaceHolder = 'Jurisdiction Country Code'
  static countryCodeTip = 'To what country does this rights basis pertain?'
  static determinationDatePlaceHolder = 'Determination Date'
  static determinationDateLabel = 'Determination Date: '
  static determinationDateTip = 'From what date does this rights basis apply?'
  static notePlaceHolder = 'Note'
  static noteLabel = 'Note: '
  static noteTip = 'Supply additional notes for this rights basis'
  static actPlaceHolder = 'Rights Granted Act'
  static actTip = 'Choose the rights act'
  static restrictionPlaceHolder = 'Rights Granted Restriction'
  static restrictionTip = 'Choose the rights granted restriction'

}

class PremisObjectStrings {

  static heading = 'Object Information'
  static categoryPlaceHolder = 'Category'
  static categoryTip = 'Categorise the digital object type'
  static formatPlaceHolder = 'Format'
  static formatLabel = 'Format: '
  static formatTip = 'Set the object\'s format, e.g JPEG, MP4'
  static propertyTypePlaceHolder = 'Property Type'
  static propertyTypeTip = 'You may use this to describe any particular property of an object: "Description" is one such example of a valid Object Property'
  static propertyValuePlaceHolder = 'Property Value'
  static propertyValueLabel = 'Property Value: '
  static propertyValueTip = 'Elaborate on the property type above, e.g, if the property type is "Description", here you would provide that description'
}

class PremisAgentStrings {

  static heading = 'Object Agent Information'
  static namePlaceHolder = 'Name'
  static nameLabel = 'Name: '
  static nameTip = 'Name the object\'s agent'
  static typePlaceHolder = 'Type'
  static typeTip = 'Is the agent an individual, or an organisation?'

}

class PremisEventStrings {

  // static info = 'Blockchain write events will appear here.'

  static heading = 'Object Event Information'
  static eventPlaceHolder = 'Event Type'
  static eventTip = 'Record object events here, e.g "Image Capture", "Image Upload", "Film Posted to Youtube" and so forth'
  static datePlaceHolder = 'Event Date'
  static dateLabel = 'Event Date: '
  static dateTip = 'The date of the event'

}

class FakeNewsEventStrings {

  static heading = 'Provenator News Events'
  static info = 'Blockchain write events will appear here.'

}

export {AppStrings, HomeStrings, AboutStrings, OverviewStrings, HelpStrings, HashStrings, WriterStrings, ReaderStrings, ObjectReaderStrings, ObjectWriterStrings, PremisRightsStrings, PremisObjectStrings, PremisAgentStrings, PremisEventStrings, FakeNewsEventStrings}
