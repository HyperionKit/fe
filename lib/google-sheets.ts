import { google } from 'googleapis';

// Google Sheets API configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CREDENTIALS = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS;

interface WhitelistEntry {
  address: string;
  walletType: string;
  timestamp: string;
  joinedAt: string;
}

export class GoogleSheetsService {
  private auth: any;
  private sheets: any;

  constructor() {
    if (!CREDENTIALS || !SHEET_ID) {
      throw new Error('Google Sheets credentials not configured');
    }

    try {
      const credentials = JSON.parse(CREDENTIALS);
      this.auth = new google.auth.GoogleAuth({
        credentials,
        scopes: SCOPES,
      });
      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    } catch (error) {
      console.error('Error initializing Google Sheets service:', error);
      throw error;
    }
  }

  /**
   * Check if a wallet address is already whitelisted
   */
  async isAddressWhitelisted(address: string): Promise<boolean> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'Whitelist!A:A', // Assuming wallet addresses are in column A
      });

      const values = response.data.values || [];
      return values.some(row => row[0]?.toLowerCase() === address.toLowerCase());
    } catch (error) {
      console.error('Error checking whitelist status:', error);
      return false;
    }
  }

  /**
   * Add a new entry to the whitelist
   */
  async addToWhitelist(entry: WhitelistEntry): Promise<boolean> {
    try {
      const values = [
        [
          entry.address,
          entry.walletType,
          entry.timestamp,
          entry.joinedAt,
          new Date().toISOString(), // Last updated
        ],
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Whitelist!A:E', // Append to columns A-E
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values,
        },
      });

      return true;
    } catch (error) {
      console.error('Error adding to whitelist:', error);
      return false;
    }
  }

  /**
   * Get all whitelisted addresses
   */
  async getAllWhitelistedAddresses(): Promise<string[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'Whitelist!A:A',
      });

      const values = response.data.values || [];
      return values.slice(1).map(row => row[0]).filter(Boolean); // Skip header row
    } catch (error) {
      console.error('Error getting whitelist:', error);
      return [];
    }
  }

  /**
   * Get whitelist statistics
   */
  async getWhitelistStats(): Promise<{
    totalAddresses: number;
    byWalletType: Record<string, number>;
    recentJoins: number;
  }> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'Whitelist!A:E',
      });

      const values = response.data.values || [];
      const dataRows = values.slice(1); // Skip header row

      const stats = {
        totalAddresses: dataRows.length,
        byWalletType: {} as Record<string, number>,
        recentJoins: 0,
      };

      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      dataRows.forEach(row => {
        const walletType = row[1] || 'Unknown';
        const joinedAt = new Date(row[3]);

        // Count by wallet type
        stats.byWalletType[walletType] = (stats.byWalletType[walletType] || 0) + 1;

        // Count recent joins (last 7 days)
        if (joinedAt > oneWeekAgo) {
          stats.recentJoins++;
        }
      });

      return stats;
    } catch (error) {
      console.error('Error getting whitelist stats:', error);
      return {
        totalAddresses: 0,
        byWalletType: {},
        recentJoins: 0,
      };
    }
  }
}

// Export a singleton instance
export const googleSheetsService = new GoogleSheetsService();
