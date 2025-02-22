import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      name: { type: String, required: true, maxLength: 40 },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      is_admin: { type:Boolean, default:false },
    },
    { timestamps: true }
  );

  const CoinSchema = new Schema(
    {
      coin_id: { type: String, required: true, unique: true },
      market_cap: { type: Number, required: true },
      price_change_percentage_24h: { type: Number, required: true },
      // price_change_percentage_7d: { type: Number },
      lowest_value: { type: Number, required: true },
      highest_value: { type: Number, required: true },
      current_price: { type: Number, required: true },
    },
    { timestamps: true }
);



const User = mongoose.model('User', UserSchema);
const Coin = mongoose.model('Coin', CoinSchema);


export { User, Coin };