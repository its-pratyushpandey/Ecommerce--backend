const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    maxlength: 2000
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    min: [0, 'Price must be positive']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price must be positive']
  },
  category: {
    type: String,
    required: [true, 'Please provide a product category'],
    enum: {
      values: ['electronics', 'clothing', 'books', 'home', 'sports', 'beauty', 'toys', 'other'],
      message: 'Invalid category'
    }
  },
  brand: {
    type: String,
    required: [true, 'Please provide a brand name'],
    maxlength: 50
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: ''
    }
  }],
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  sku: {
    type: String,
    required: [true, 'Please provide a SKU'],
    unique: true,
    uppercase: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  features: [{
    type: String,
    maxlength: 100
  }],
  specifications: {
    weight: String,
    dimensions: String,
    color: String,
    material: String
  },
  tags: [{
    type: String,
    lowercase: true,
    trim: true
  }]
}, {
  timestamps: true
});

// Create indexes for better performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ 'ratings.average': -1 });
productSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Product', productSchema);