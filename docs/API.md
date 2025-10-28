# API Documentation

Complete API reference for the NexaFlow AI cryptocurrency arbitrage trading platform.

## Base URL

```
https://api.nexaflow.ai/v1
```

## Authentication

All API requests require authentication using API keys generated from your dashboard.

### Headers

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Obtaining API Keys

1. Log in to your dashboard at https://nexaflow.ai/dashboard
2. Navigate to Settings → API Keys
3. Click "Generate New Key"
4. Store your key securely (it's only shown once)

### Key Permissions

- **Read Only**: View data only, no trading
- **Trade**: Read + execute trades
- **Admin**: Full access (not recommended for API)

## Rate Limiting

### Limits by Plan

| Plan | Requests/Minute | Requests/Hour |
|------|-----------------|---------------|
| Free | 60 | 1,000 |
| Standard | 600 | 10,000 |
| Premium | 3,000 | 100,000 |
| Enterprise | Custom | Custom |

### Rate Limit Headers

```http
X-RateLimit-Limit: 600
X-RateLimit-Remaining: 599
X-RateLimit-Reset: 1640995200
```

### Handling Rate Limits

```typescript
if (response.status === 429) {
  const resetTime = response.headers.get('X-RateLimit-Reset');
  // Wait until reset time
}
```

## Error Handling

### Standard Error Response

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request body is invalid",
    "details": {
      "field": "amount",
      "issue": "Must be a positive number"
    }
  }
}
```

### Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `UNAUTHORIZED` | 401 | Invalid or missing API key |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `INVALID_REQUEST` | 400 | Malformed request |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

## Endpoints

### Opportunities

#### List Opportunities

Get real-time arbitrage opportunities.

```http
GET /opportunities
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `min_profit` | number | 2.0 | Minimum profit percentage |
| `max_risk` | string | "high" | Maximum risk level (low/medium/high) |
| `pairs` | string[] | all | Trading pairs to filter (e.g., BTC/USDT) |
| `limit` | number | 50 | Number of results (max 100) |

**Example Request:**

```bash
curl -X GET "https://api.nexaflow.ai/v1/opportunities?min_profit=3.0&max_risk=medium&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Response:**

```json
{
  "data": [
    {
      "id": "opp_abc123",
      "pair": "BTC/USDT",
      "buy_exchange": "binance",
      "sell_exchange": "coinbase",
      "buy_price": 45000.00,
      "sell_price": 46350.00,
      "profit_percentage": 3.0,
      "risk_level": "medium",
      "estimated_volume": 2.5,
      "timestamp": "2025-01-15T12:34:56Z",
      "expires_at": "2025-01-15T12:35:56Z"
    }
  ],
  "meta": {
    "total": 247,
    "page": 1,
    "per_page": 10
  }
}
```

#### Get Opportunity

Retrieve a specific opportunity by ID.

```http
GET /opportunities/{id}
```

**Example Response:**

```json
{
  "id": "opp_abc123",
  "pair": "BTC/USDT",
  "buy_exchange": "binance",
  "sell_exchange": "coinbase",
  "buy_price": 45000.00,
  "sell_price": 46350.00,
  "profit_percentage": 3.0,
  "risk_level": "medium",
  "estimated_volume": 2.5,
  "spread": 1350.00,
  "timestamp": "2025-01-15T12:34:56Z"
}
```

### Trades

#### Execute Trade

Execute an arbitrage trade.

```http
POST /trades
```

**Request Body:**

```json
{
  "opportunity_id": "opp_abc123",
  "amount": 1000.00,
  "auto_execute": true
}
```

**Response:**

```json
{
  "id": "trade_xyz789",
  "opportunity_id": "opp_abc123",
  "status": "executing",
  "buy_order": {
    "exchange": "binance",
    "order_id": "ord_123",
    "status": "filled",
    "amount": 1000.00
  },
  "sell_order": {
    "exchange": "coinbase",
    "order_id": "ord_456",
    "status": "pending",
    "amount": 1000.00
  },
  "created_at": "2025-01-15T12:35:00Z"
}
```

#### Get Trade

Retrieve trade details.

```http
GET /trades/{id}
```

#### List Trades

Get your trade history.

```http
GET /trades
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `status` | string | all | Filter by status |
| `from` | string | - | Start date (ISO 8601) |
| `to` | string | - | End date (ISO 8601) |
| `limit` | number | 50 | Number of results |

### Bots

#### List Bots

Get all your trading bots.

```http
GET /bots
```

**Response:**

```json
{
  "data": [
    {
      "id": "bot_abc123",
      "name": "BTC Arbitrage Bot",
      "status": "active",
      "profit_target": 2.5,
      "risk_level": "medium",
      "active_since": "2025-01-01T00:00:00Z",
      "total_trades": 156,
      "total_profit": 4532.50,
      "win_rate": 0.92
    }
  ]
}
```

#### Create Bot

Create a new trading bot.

```http
POST /bots
```

**Request Body:**

```json
{
  "name": "ETH Arbitrage Bot",
  "pairs": ["ETH/USDT", "ETH/BTC"],
  "min_profit": 2.5,
  "max_risk": "medium",
  "max_position_size": 5000.00,
  "enabled": true
}
```

#### Update Bot

Update bot configuration.

```http
PATCH /bots/{id}
```

#### Delete Bot

Stop and delete a bot.

```http
DELETE /bots/{id}
```

### Analytics

#### Get Performance

Get trading performance analytics.

```http
GET /analytics/performance
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `period` | string | 30d | Time period (7d/30d/90d/1y) |
| `bot_id` | string | - | Filter by specific bot |

**Response:**

```json
{
  "period": "30d",
  "total_trades": 234,
  "successful_trades": 218,
  "win_rate": 0.93,
  "total_profit": 15420.50,
  "total_fees": 234.80,
  "net_profit": 15185.70,
  "roi": 0.15,
  "sharpe_ratio": 2.3,
  "max_drawdown": 0.03,
  "daily_returns": [
    {
      "date": "2025-01-15",
      "profit": 542.30,
      "trades": 12
    }
  ]
}
```

#### Get Markets

Get market statistics.

```http
GET /analytics/markets
```

**Response:**

```json
{
  "pairs": [
    {
      "pair": "BTC/USDT",
      "opportunities": 47,
      "avg_profit": 2.8,
      "avg_spread": 1250.00,
      "volume_24h": 1234567.89
    }
  ]
}
```

### Account

#### Get Account Info

Get your account details.

```http
GET /account
```

**Response:**

```json
{
  "id": "acc_123",
  "email": "user@example.com",
  "plan": "premium",
  "balance": 50000.00,
  "api_rate_limit": 3000,
  "active_bots": 5,
  "created_at": "2024-01-01T00:00:00Z"
}
```

#### Get Balance

Get current balance across exchanges.

```http
GET /account/balance
```

**Response:**

```json
{
  "total_usd": 50000.00,
  "by_exchange": {
    "binance": {
      "usd": 20000.00,
      "btc": 0.5
    },
    "coinbase": {
      "usd": 30000.00,
      "eth": 10.0
    }
  }
}
```

## WebSocket API

For real-time updates, connect to our WebSocket endpoint.

### Connection

```
wss://api.nexaflow.ai/v1/stream
```

### Authentication

Send authentication message after connection:

```json
{
  "type": "auth",
  "token": "YOUR_API_KEY"
}
```

### Subscribe to Opportunities

```json
{
  "type": "subscribe",
  "channel": "opportunities",
  "params": {
    "min_profit": 2.5,
    "pairs": ["BTC/USDT", "ETH/USDT"]
  }
}
```

### Opportunity Updates

```json
{
  "type": "opportunity",
  "data": {
    "id": "opp_abc123",
    "pair": "BTC/USDT",
    "profit_percentage": 3.2,
    "timestamp": "2025-01-15T12:34:56Z"
  }
}
```

### Subscribe to Trades

```json
{
  "type": "subscribe",
  "channel": "trades"
}
```

### Trade Updates

```json
{
  "type": "trade_update",
  "data": {
    "id": "trade_xyz789",
    "status": "completed",
    "profit": 125.50
  }
}
```

## SDKs

### JavaScript/TypeScript

```bash
npm install @nexaflow/sdk
```

```typescript
import { NexaFlowClient } from '@nexaflow/sdk';

const client = new NexaFlowClient({
  apiKey: process.env.NEXAFLOW_API_KEY
});

const opportunities = await client.opportunities.list({
  minProfit: 3.0,
  maxRisk: 'medium'
});
```

### Python

```bash
pip install nexaflow
```

```python
from nexaflow import NexaFlowClient

client = NexaFlowClient(api_key=os.environ['NEXAFLOW_API_KEY'])

opportunities = client.opportunities.list(
    min_profit=3.0,
    max_risk='medium'
)
```

## Code Examples

### Execute Arbitrage Trade

```typescript
// Find opportunity
const opportunities = await client.opportunities.list({
  minProfit: 3.0,
  limit: 1
});

if (opportunities.data.length > 0) {
  const opp = opportunities.data[0];

  // Execute trade
  const trade = await client.trades.create({
    opportunityId: opp.id,
    amount: 1000,
    autoExecute: true
  });

  console.log(`Trade executed: ${trade.id}`);
}
```

### Monitor Real-time Opportunities

```typescript
const ws = client.stream();

ws.subscribe('opportunities', {
  minProfit: 2.5,
  pairs: ['BTC/USDT']
});

ws.on('opportunity', (data) => {
  console.log(`New opportunity: ${data.pair} - ${data.profit_percentage}%`);
});
```

### Get Performance Report

```typescript
const performance = await client.analytics.getPerformance({
  period: '30d',
  botId: 'bot_abc123'
});

console.log(`Win Rate: ${performance.winRate * 100}%`);
console.log(`Total Profit: $${performance.totalProfit}`);
console.log(`ROI: ${performance.roi * 100}%`);
```

## Best Practices

### Security

- Never expose API keys in client-side code
- Use environment variables for keys
- Rotate keys regularly
- Use read-only keys for analytics

### Performance

- Cache responses when possible
- Use WebSocket for real-time data
- Batch requests when available
- Handle rate limits gracefully

### Error Handling

```typescript
try {
  const result = await client.trades.create(tradeData);
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // Wait and retry
    await sleep(60000);
    return retry();
  }
  // Handle other errors
}
```

## Webhooks

Configure webhooks to receive notifications.

### Available Events

- `opportunity.created`
- `trade.completed`
- `trade.failed`
- `bot.stopped`
- `balance.low`

### Payload Example

```json
{
  "event": "trade.completed",
  "data": {
    "id": "trade_xyz789",
    "profit": 125.50,
    "timestamp": "2025-01-15T12:35:00Z"
  }
}
```

## Support

For API support:
- Email: api-support@nexaflow.ai
- Documentation: https://nexaflow.ai/docs
- Status: https://status.nexaflow.ai

---

© 2025 NexaFlow AI. All rights reserved.
