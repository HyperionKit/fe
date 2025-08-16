# Whitelist Setup Guide

This guide explains how to set up the whitelist functionality with Google Sheets integration.

## 🚀 **Features**

- **Wallet Authentication**: Connect Metamask or OKX wallet
- **Duplicate Prevention**: Users can't register the same wallet twice
- **Google Sheets Integration**: All whitelist data is stored in Google Sheets
- **Real-time Status**: Check if user is already whitelisted

## 📋 **Prerequisites**

1. **Google Cloud Project** with Google Sheets API enabled
2. **Service Account** with Google Sheets access
3. **Google Sheet** for storing whitelist data

## 🔧 **Setup Steps**

### 1. **Google Cloud Setup**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Create a **Service Account**
5. Download the service account JSON credentials

### 2. **Google Sheet Setup**

1. Create a new Google Sheet
2. Name the first sheet "Whitelist"
3. Add these headers in row 1:
   - **A**: Wallet Address
   - **B**: Wallet Type
   - **C**: Timestamp
   - **D**: Joined Date
   - **E**: Last Updated

### 3. **Environment Variables**

Create a `.env.local` file in your project root with:

```bash
# Google Service Account Credentials (JSON string)
GOOGLE_SERVICE_ACCOUNT_CREDENTIALS={"type":"service_account","project_id":"your-project-id","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}

# Google Sheet ID (from the URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit)
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### 4. **Share Google Sheet**

1. Share your Google Sheet with the service account email
2. Give it **Editor** permissions

## 📱 **Usage**

### **For Users:**

1. Navigate to `/whitelist`
2. Connect Metamask or OKX wallet
3. Click "Join Whitelist"
4. Wallet address is automatically added to Google Sheets

### **For Admins:**

- View all whitelisted addresses in Google Sheets
- Export data for analysis
- Monitor new registrations in real-time

## 🔒 **Security Features**

- **Duplicate Prevention**: Same wallet can't register twice
- **Wallet Verification**: Only authentic wallet connections allowed
- **Timestamp Tracking**: All actions are logged with timestamps

## 🐛 **Troubleshooting**

### **Common Issues:**

1. **"Google Sheets credentials not configured"**
   - Check your `.env.local` file
   - Ensure `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS` is set

2. **"Failed to add to whitelist"**
   - Verify Google Sheet permissions
   - Check service account has Editor access

3. **"Metamask is not installed"**
   - User needs to install Metamask extension
   - Guide them to [metamask.io](https://metamask.io)

### **Testing:**

- Use test wallets for development
- Check browser console for detailed error logs
- Verify API endpoints are working (`/api/whitelist/check`, `/api/whitelist/join`)

## 📊 **Data Structure**

Each whitelist entry contains:

| Column | Description | Example |
|--------|-------------|---------|
| A | Wallet Address | `0x1234...abcd` |
| B | Wallet Type | `metamask` or `okx` |
| C | Timestamp | `2024-01-15T10:30:00Z` |
| D | Joined Date | `2024-01-15T10:30:00Z` |
| E | Last Updated | `2024-01-15T10:30:00Z` |

## 🚀 **Deployment**

1. Set environment variables in your hosting platform
2. Ensure Google Sheets API is accessible
3. Test with a small group before full launch

## 📞 **Support**

For technical issues:
- Check the API logs
- Verify Google Cloud project settings
- Ensure all environment variables are set correctly
