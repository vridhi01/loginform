<?php
// send ajax request to it and get response to it
namespace Excellence\AjaxTutorial\Controller\Index;

class Fetchdata extends \Magento\Framework\App\Action\Action
{
    protected $resultPageFactory;
    protected $crudFactory;
    protected $jsonHelper;

    /**
     * Constructor
     *
     * @param \Magento\Framework\App\Action\Context  $context
     * @param \Magento\Framework\Json\Helper\Data $jsonHelper
     */
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory,
        \Excellence\AjaxTutorial\Model\CrudFactory $dataFactory,
        \Magento\Framework\Json\Helper\Data $jsonHelper
    ) {
        $this->resultPageFactory = $resultPageFactory;
        $this->crudFactory = $dataFactory;
        $this->jsonHelper = $jsonHelper;
        parent::__construct($context);
    }
    /**
     * Execute view action
     *
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {  
      try {
        $registeredUser = $this->crudFactory->create();
        $collection = $registeredUser->getCollection();
        $result = $collection->getData();
        
        return $this->jsonResponse($result);
        } catch (\Magento\Framework\Exception\LocalizedException $e) {
            return $this->jsonResponse($e->getMessage());
        } catch (\Exception $e) {
            $this->logger->critical($e);
            return $this->jsonResponse($e->getMessage());
        }
        
       
    }
      /**
     * Create json response
     *
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function jsonResponse($response = '')
    {
        return $this->getResponse()->representJson(
            $this->jsonHelper->jsonEncode($response)
        );
    }
   
  
}

