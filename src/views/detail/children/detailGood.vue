<template>
  <div class="image-info" v-if="Object.keys(imagesInfo).length !== 0">
     <div class=" clear-fix">
      <div class="start"></div>
      <div class="desc">{{ imagesInfo.desc }}</div>
      <div class="end"></div>
    </div>      
    <div class="pic" :key="index" v-for="(item, index) in imagesInfo.detailImage">
      <div class="key">{{ item.key  }}</div>
      <div class="info-list">
          <img
        :key="imageIndex"
        :src="image"
        @load = 'imgLoad'
        alt=""
        v-for="(image, imageIndex) in item.list"
      />
      </div>
    </div>
    <!-- <div :key="index" v-for="(item, index) in imagesInfo.detailImage">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img
          :key="imageIndex"
          :src="image"
          @load = 'imgLoad'
          alt=""
          v-for="(image, imageIndex) in item.list"
        />
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "DetailImagesInfo",
  data() {
    return {
      count: 0,
      imagesLength: 0
    };
  },
  props: {
    imagesInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.count === this.imagesLength) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    imagesInfo() {
      this.imagesLength = this.imagesInfo.detailImage[0].list.length;
    }
  }
};

// export default {
//   props: {
//     detail: {
//       type: Object,
//       default() {
//         return {};
//       },
//     },
//   },
//   data() {
//     return {
//       count: 0,
//       imagesLength: 0
//     };
//   },
//   methods: {
//     imgLoad() {
//       if (++this.count === this.imagesLength) {
//         this.$emit("imgLoad");
//       }
//     }
//   },
//   watch: {
//     detail() {
//       this.imagesLength = this.imagesInfo.detailImage[0].list.length;
//     }
//   }
//   methods: {
//     imgLoad() {
//     //   if (++this.len === this.listLength) {
//     //     console.log(this.len);
        
//     //   }
//       this.$emit('imgLoad')
//     },
//   },
//   watch: {
//     imagesInfo() {
//       this.listLength = this.detail.detailImage[0].list.length;
//     },
//   },
// };
</script>
<style scoped>
.image-info {
  /* margin: 20px 5px 0; */
   padding: 20px 0;
   border-bottom: 5px solid #f2f5f8
}
.info-desc {
    padding: 0 15px;
}
 .start,.end {
  width: 100px;
  height: 2px;
  background: #808080;
  position: relative;
  margin-bottom: 10px;
}
.start {
    float: left;
}
.end {
    float: right;
} 
.start::before,
.end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #000;
}
.start::before {
  top: -1px;
  left: 0;
}
.end::after {
  right: 0;
  top: -1px;
}
.desc {
  font-size: 12px;
}
.pic img {
  width: 100%;
}
.key {
  margin: 15px 0 10px;
  color: rgb(27, 27, 27);
}
.image-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
} 

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333333;
} 


</style>