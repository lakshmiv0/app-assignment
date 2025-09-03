# React Native Live Transcript Assignment

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lakshmiv0/app-assignment.git
   cd app-assignment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the app:**
   - For iOS: `npm run ios`
   - For Android: `npm run android`
   - For Web: `npm run web`
   - For all platforms: `npm start`

## System Requirements

- **Operating System:** macOS, Windows, or Linux
- **Node.js:** v18 or higher (recommended: latest LTS)
- **npm:** v9 or higher
- **Expo CLI:** v6 or higher
- **Device/Emulator:**
  - iOS Simulator (Xcode required for macOS)
  - Android Emulator (Android Studio required)
  - Or a physical device with Expo Go app installed
- **Browser:** Latest Chrome, Firefox, or Safari for web testing

## Troubleshooting
- If you encounter issues with dependencies, try:
  ```bash
  rm -rf node_modules package-lock.json && npm install
  ```
- If Expo fails to start, ensure you have the Expo CLI installed:
  ```bash
  npm install -g expo-cli
  ```
- For TypeScript errors, check your `tsconfig.json` and ensure all types are installed.
- For device issues, restart your emulator/device and clear Expo cache:
  ```bash
  expo start -c
  ```

## Assignment Instructions

### 1. Create the Live Transcript Feature
- Implement a live transcript feature that displays real-time transcription as audio is recorded.
- Suggested location: Tab 1 or main screen.

### 2. List Previous Transcripts in Tab 2
- In Tab 2, display a list of previously saved transcripts.
- Each transcript should show a summary and timestamp.

### 3. Create Mock API & Send Transcript
- Create a mock API endpoint (local function or service).
- Show how to send the transcript data to this API when recording ends.

### 4. Create Mock API & Show Transcript Summary
- Extend the mock API to return a summary of the transcript.
- Display the summary to the user after recording ends.

### 5. Clean Up Navigation Layout and Tabs
- Refactor navigation for clarity and usability.
- Ensure tabs are clearly labeled and organized.

## Submitting Your Assignment

1. **Create a new public branch:**
   ```bash
   git checkout -b <your-branch-name>
   git push --set-upstream origin <your-branch-name>
   ```
2. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Assignment submission"
   git push
   ```
3. **Share your branch URL for review.**
